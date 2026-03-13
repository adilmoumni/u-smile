import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { getAdminEmailTemplate, getUserEmailTemplate } from '@/lib/emailTemplates';
import { dbAdmin } from '@/lib/firebase-admin';
import * as admin from 'firebase-admin';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Save to Firestore (Server-side)
    try {
      await dbAdmin.collection('appointments').add({
        ...data,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        status: "pending",
        source: "backend_api"
      });
      console.log('Appointment saved to Firestore via Admin SDK');
    } catch (dbError) {
      console.error('Firestore save failed:', dbError);
      // We still try to send the email if DB save fails
    }

    // Read logo file
    const logoPath = path.join(process.cwd(), 'public/images/logos', 'logo-u-smile.svg');
    const logoBuffer = fs.readFileSync(logoPath);

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Often needed for shared hosting
      }
    });

    // 2. Send email to ADMIN
    await transporter.sendMail({
      from: `"U-Smile Website" <${process.env.MAIL_USERNAME}>`,
      to: process.env.ADMIN_EMAIL || 'adilmoumni@gmail.com', // Admin email from env
      subject: `Nouveau RDV: ${data.name} - ${data.location}`,
      html: getAdminEmailTemplate(data),
      attachments: [
        {
          filename: 'logo.svg',
          content: logoBuffer,
          cid: 'logo'
        }
      ]
    });

    // 3. Send confirmation to USER
    await transporter.sendMail({
      from: `"U-Smile Orthodontie" <${process.env.MAIL_USERNAME}>`,
      to: data.email,
      subject: `Demande de rendez-vous enregistrée - U.Smile`,
      html: getUserEmailTemplate(data),
      attachments: [
        {
          filename: 'logo.svg',
          content: logoBuffer,
          cid: 'logo'
        }
      ]
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Submission failed:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
