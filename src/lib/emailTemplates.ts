export const getAdminEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #393939; margin: 0; padding: 0; background-color: #fdfcfb; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eee; }
    .header { background-color: #96928E; color: white; padding: 40px 20px; text-align: center; }
    .content { padding: 40px 30px; }
    .footer { background-color: #393939; color: #ffffff; padding: 20px; text-align: center; font-size: 12px; }
    .detail-row { margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 15px; }
    .label { font-weight: bold; font-size: 12px; color: #96928E; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
    .value { font-size: 16px; color: #393939; }
    .badge { display: inline-block; padding: 5px 12px; border-radius: 20px; background-color: #f0f8ff; color: #96928E; font-size: 12px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-weight: 300;">Nouveau Rendez-vous</h1>
      <p style="margin: 10px 0 0; opacity: 0.8;">Un nouveau patient souhaite prendre contact.</p>
    </div>
    <div class="content">
      <div class="detail-row">
        <div class="label">Patient</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="detail-row">
        <div class="label">Lieu de consultation</div>
        <div class="value"><span class="badge">${data.location.toUpperCase()}</span></div>
      </div>
      <div class="detail-row">
        <div class="label">Date souhaitée</div>
        <div class="value">${data.date}</div>
      </div>
      <div class="detail-row">
        <div class="label">Email</div>
        <div class="value">${data.email}</div>
      </div>
      <div class="detail-row">
        <div class="label">Téléphone</div>
        <div class="value">${data.phone}</div>
      </div>
      <div class="detail-row">
        <div class="label">Objet</div>
        <div class="value">${data.subject || 'Consultation Orthodontique'}</div>
      </div>
      <div class="detail-row" style="border: none;">
        <div class="label">Message</div>
        <div class="value" style="font-style: italic;">"${data.message || 'Pas de message.'}"</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} U-Smile Orthodontie. Système Notification.</p>
    </div>
  </div>
</body>
</html>
`;

export const getUserEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #393939; margin: 0; padding: 0; background-color: #fdfcfb; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eee; }
    .header { background-color: #ffffff; padding: 40px 20px; text-align: center; border-bottom: 3px solid #96928E; }
    .content { padding: 40px 30px; }
    .footer { background-color: #393939; color: #ffffff; padding: 40px 20px; text-align: center; font-size: 12px; }
    .button { display: inline-block; padding: 15px 30px; background-color: #96928E; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; margin-top: 20px; }
    h2 { font-weight: 300; font-size: 24px; color: #96928E; }
    .summary { background-color: #fdfcfb; padding: 25px; border-radius: 12px; margin: 30px 0; border: 1px solid #f0ebe3; }
    .summary-item { font-size: 14px; margin-bottom: 10px; color: #666; }
    .summary-item b { color: #393939; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
       <img src="cid:logo" alt="U-Smile" style="max-width: 150px;" />
    </div>
    <div class="content">
      <h2>Merci pour votre confiance, ${data.name}.</h2>
      <p>Nous avons bien reçu votre demande de rendez-vous pour notre cabinet de <b>${data.location === 'velodrome' ? 'Vélodrome Casablanca' : 'Bouskoura'}</b>.</p>
      
      <p>Notre coordinatrice de traitement est en train de traiter votre dossier. Nous vous recontacterons très prochainement au <b>${data.phone}</b> pour confirmer le créneau horaire définitif.</p>
      
      <div class="summary">
        <div style="font-weight: bold; text-transform: uppercase; font-size: 12px; color: #96928E; margin-bottom: 15px; letter-spacing: 1px;">Récapitulatif de votre demande :</div>
        <div class="summary-item">Lieu: <b>${data.location === 'velodrome' ? 'Vélodrome Casablanca' : 'Bouskoura'}</b></div>
        <div class="summary-item">Date souhaitée: <b>${data.date}</b></div>
        <div class="summary-item">Objet: <b>${data.subject || 'Consultation Orthodontique'}</b></div>
      </div>

      <p>Au plaisir de vous accueillir bientôt au cabinet.</p>
      <p style="margin-top: 40px;"><b>L'équipe U.Smile Orthodontie</b></p>
    </div>
    <div class="footer">
      <p>6 Rue Abou Zaid Eddaboussi, Vélodrome, Casablanca</p>
      <p>Rés Malak 4 – 1er Étage Bureau N° 15 – Bouskoura Ville Verte</p>
      <div style="margin-top: 20px; color: #96928E;">(212) 700-722556 | contact@usmile.com</div>
    </div>
  </div>
</body>
</html>
`;
