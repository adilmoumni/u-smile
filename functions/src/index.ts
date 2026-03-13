import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import { getAdminEmailHtml, getUserEmailHtml } from "./templates";

admin.initializeApp();

const db = admin.firestore();

export const submitAppointment = onCall({
  cors: true,
  region: "us-central1"
}, async (request) => {
  console.log("Function triggered with data:", JSON.stringify(request.data));
  
  try {
    const { name, email, phone, location, date, subject, message } = request.data;

    if (!name || !email) {
      throw new HttpsError("invalid-argument", "Missing required fields.");
    }

    // 1. Save to Firestore
    await db.collection("appointments").add({
      name,
      email,
      phone,
      location,
      date,
      subject,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: "pending",
      source: "cloud_function_v2"
    });

    console.log("Saved to Firestore successfully.");

    // 2. Configure NodeMailer
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT === "465",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // 3. Generate Email HTML using external templates
    const emailData = { name, email, phone, location, date, subject, message };
    const adminHtml = getAdminEmailHtml(emailData);
    const userHtml = getUserEmailHtml(emailData);

    // 4. Send Emails
    console.log("Sending emails...");
    await transporter.sendMail({
      from: `"U-Smile Website" <${process.env.MAIL_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || "moumniabdou.adil@gmail.com",
      subject: `RDV: ${name} - ${location}`,
      html: adminHtml
    });

    await transporter.sendMail({
      from: `"U-Smile Orthodontie" <${process.env.MAIL_USERNAME}>`,
      to: email,
      subject: `Confirmation de demande - U.Smile`,
      html: userHtml
    });

    console.log("Emails sent successfully.");
    return { success: true };

  } catch (error: any) {
    console.error("Function error details:", error);
    throw new HttpsError("internal", error.message || "Unknown error");
  }
});
