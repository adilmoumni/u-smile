"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserEmailHtml = exports.getAdminEmailHtml = void 0;
const logoUrl = "https://u-smile-cabinet.web.app/images/logos/USMILE%20LOGO%20Horizontal%20-%20Dark%20Taupe.svg";
const brandSpearmint = "#7ec8a4";
const brandDarkTaupe = "#4a3f35";
const brandWarmCream = "#faf7f2";
const brandWarmTaupe = "#a59c94";
const getAdminEmailHtml = (data) => {
    const { name, email, phone, location, date, subject, message } = data;
    return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: ${brandDarkTaupe}; background-color: ${brandWarmCream}; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
    .header { padding: 40px 30px; text-align: center; border-bottom: 1px solid #f0ebe3; }
    .logo { height: 50px; margin-bottom: 20px; }
    .content { padding: 40px; }
    .footer { background: ${brandDarkTaupe}; color: #ffffff; padding: 30px; text-align: center; font-size: 12px; letter-spacing: 1px; }
    .tag { display: inline-block; padding: 6px 14px; background: ${brandSpearmint}; color: white; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; }
    h1 { font-family: Georgia, serif; font-weight: 300; font-size: 28px; margin: 0 0 10px; color: ${brandDarkTaupe}; }
    .detail-item { margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #f9f9f9; }
    .label { font-size: 10px; font-weight: bold; color: ${brandWarmTaupe}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }
    .value { font-size: 17px; color: ${brandDarkTaupe}; font-weight: 500; }
    .message-box { background: #fdfcfb; border-left: 3px solid ${brandSpearmint}; padding: 20px; font-style: italic; color: #666; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${logoUrl}" alt="U-Smile" class="logo">
      <div class="tag">Nouvelle Demande</div>
      <h1>Demande de Rendez-vous</h1>
    </div>
    <div class="content">
      <div class="detail-item">
        <div class="label">Patient</div>
        <div class="value">${name}</div>
      </div>
      <div class="detail-item">
        <div class="label">Lieu Souhaité</div>
        <div class="value">${location.toUpperCase()}</div>
      </div>
      <div class="detail-item">
        <div class="label">Date Prévue</div>
        <div class="value">${date}</div>
      </div>
      <div class="detail-item">
        <div class="label">Coordonnées</div>
        <div class="value">${email}<br>${phone}</div>
      </div>
      <div class="detail-item">
        <div class="label">Objet</div>
        <div class="value">${subject || "Consultation Initiale"}</div>
      </div>
      <div class="message-box">
        "${message || "Aucun message supplémentaire."}"
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0; opacity: 0.8;">SYSTÈME DE NOTIFICATION U-SMILE</p>
      <p style="margin: 5px 0 0;">&copy; ${new Date().getFullYear()} Cabinet Dentaire U-Smile</p>
    </div>
  </div>
</body>
</html>`;
};
exports.getAdminEmailHtml = getAdminEmailHtml;
const getUserEmailHtml = (data) => {
    const { name, location, phone, date } = data;
    const cabinetName = location === "velodrome" ? "CASABLANCA VÉLODROME" : "BOUSKOURA";
    return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: ${brandDarkTaupe}; background-color: ${brandWarmCream}; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
    .header { padding: 50px 30px; text-align: center; background: linear-gradient(135deg, #ffffff 0%, ${brandWarmCream} 100%); border-bottom: 2px solid ${brandSpearmint}; }
    .logo { height: 60px; margin-bottom: 25px; }
    .content { padding: 50px 40px; text-align: center; }
    .footer { background: ${brandDarkTaupe}; color: #ffffff; padding: 40px; text-align: center; font-size: 13px; line-height: 1.8; }
    h2 { font-family: Georgia, serif; font-weight: 300; font-size: 32px; margin: 0 0 20px; color: ${brandDarkTaupe}; }
    p { font-size: 16px; color: #666; margin-bottom: 30px; }
    .appointment-card { background: #fdfcfb; border: 1px solid #f0ebe3; padding: 30px; border-radius: 8px; display: inline-block; min-width: 250px; text-align: left; margin-bottom: 40px; }
    .info-line { margin-bottom: 15px; }
    .info-label { font-size: 9px; color: ${brandWarmTaupe}; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; }
    .info-value { font-size: 16px; color: ${brandDarkTaupe}; margin-top: 4px; }
    .accent-color { color: ${brandSpearmint}; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${logoUrl}" alt="U-Smile" class="logo">
      <h2>Prise de contact confirmée</h2>
    </div>
    <div class="content">
      <p>Bonjour ${name},</p>
      <p>Nous avons bien reçu votre demande de rendez-vous. Un membre de notre équipe vous contactera très prochainement pour confirmer l'horaire précis.</p>
      <div class="appointment-card">
        <div class="info-line">
          <div class="info-label">Cabinet</div>
          <div class="info-value"><span class="accent-color">${cabinetName}</span></div>
        </div>
        <div class="info-line">
          <div class="info-label">Date Souhaitée</div>
          <div class="info-value">${date}</div>
        </div>
      </div>
      <p style="font-style: italic; font-size: 14px;">Merci de votre confiance et à très bientôt au cabinet.</p>
    </div>
    <div class="footer">
      <div style="font-weight: bold; letter-spacing: 2px; margin-bottom: 15px;">U-SMILE ORTHODONTIE</div>
      <div style="opacity: 0.8;">
        Casablanca Vélodrome | Bouskoura<br>
        Tél: (+212) 700-722556<br>
        www.u-smile-cabinet.web.app
      </div>
    </div>
  </div>
</body>
</html>`;
};
exports.getUserEmailHtml = getUserEmailHtml;
//# sourceMappingURL=templates.js.map