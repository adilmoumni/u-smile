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
const templates_1 = require("./templates");
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
        const emailData = { name, email, phone, location, date, subject, message };
        const adminHtml = (0, templates_1.getAdminEmailHtml)(emailData);
        const userHtml = (0, templates_1.getUserEmailHtml)(emailData);
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