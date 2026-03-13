"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitAppointment = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = __importStar(require("firebase-admin"));
const nodemailer = __importStar(require("nodemailer"));
admin.initializeApp();
const db = admin.firestore();
exports.submitAppointment = (0, https_1.onCall)({
    cors: true,
    region: "us-central1"
}, async (request) => {
    console.log("Function triggered with data:", JSON.stringify(request.data));
    try {
        const { name, email, phone, location, date, subject, message } = request.data;
        if (!name || !email) {
            throw new https_1.HttpsError("invalid-argument", "Missing required fields.");
        }
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
        const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; line-height: 1.6; color: #393939; background-color: #fdfcfb; }
    .container { max-width: 600px; margin: 0 auto; background: white; border: 1px solid #eee; }
    .header { background: #96928E; color: white; padding: 20px; text-align: center; }
    .content { padding: 30px; }
    .footer { background: #393939; color: white; padding: 15px; text-align: center; font-size: 12px; }
    .label { font-weight: bold; color: #96928E; text-transform: uppercase; font-size: 11px; margin-top: 15px; }
    .value { font-size: 16px; margin-bottom: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>Nouveau RDV</h1></div>
    <div class="content">
      <div class="label">Patient</div><div class="value">${name}</div>
      <div class="label">Lieu</div><div class="value">${location.toUpperCase()}</div>
      <div class="label">Date</div><div class="value">${date}</div>
      <div class="label">Contact</div><div class="value">${email} | ${phone}</div>
      <div class="label">Objet</div><div class="value">${subject || "-"}</div>
      <div class="label">Message</div><div class="value">${message || "-"}</div>
    </div>
    <div class="footer">&copy; ${new Date().getFullYear()} U-Smile</div>
  </div>
</body>
</html>`;
        const userHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; }
    .header { border-bottom: 2px solid #96928E; padding-bottom: 10px; margin-bottom: 20px; }
    .footer { margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h2>U-SMILE ORTHODONTIE</h2></div>
    <p>Bonjour ${name},</p>
    <p>Nous avons bien reçu votre demande de rendez-vous pour le cabinet de <b>${location}</b>.</p>
    <p>Nous vous contacterons très prochainement au <b>${phone}</b>.</p>
    <div class="footer">Casablanca | Bouskoura | (+212) 700-722556</div>
  </div>
</body>
</html>`;
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
    }
    catch (error) {
        console.error("Function error details:", error);
        throw new https_1.HttpsError("internal", error.message || "Unknown error");
    }
});
//# sourceMappingURL=index.js.map