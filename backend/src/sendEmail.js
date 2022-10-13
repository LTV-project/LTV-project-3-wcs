// sendEmail.js

const mailer = require("./mailer");

// eslint-disable-next-line no-unused-vars
const sendEmail = (req, res) => {
  const { email } = req.body;

  mailer.sendMail(
    {
      from: "naim-aouchiche_student2022@wilder.school",
      to: email,
      subject: `Bonjour ${req.body.pseudo}, confirmation de votre inscription`,
      text: "Êtes-vous prêts à jouer le jeu ou à échanger?",
      html: `<!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="initial-scale=1.0">
        <meta name="format-detection" content="telephone=no">
        <title>MOSAICO Responsive Email Designer</title>
        
        <style type="text/css">
          body{ margin: 0; padding: 0; }
          img{ border: 0px; display: block; }
      
          .socialLinks{ font-size: 6px; }
          .socialLinks a{
            display: inline-block;
          }
      
          .long-text p{ margin: 1em 0px; }
          .long-text p:last-child{ margin-bottom: 0px; }
          .long-text p:first-child{ margin-top: 0px; }
        </style>
        <style type="text/css">
          /* yahoo, hotmail */
          .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{ line-height: 100%; }
          .yshortcuts a{ border-bottom: none !important; }
          .vb-outer{ min-width: 0 !important; }
          .RMsgBdy, .ExternalClass{
            width: 100%;
            background-color: #3f3f3f;
            background-color: #3f3f3f}
      
          /* outlook/office365 add buttons outside not-linked images and safari have 2px margin */
          [o365] button{ margin: 0 !important; }
      
          /* outlook */
          table{ mso-table-rspace: 0pt; mso-table-lspace: 0pt; }
          #outlook a{ padding: 0; }
          img{ outline: none; text-decoration: none; border: none; -ms-interpolation-mode: bicubic; }
          a img{ border: none; }
      
          @media screen and (max-width: 600px) {
            table.vb-container, table.vb-row{
              width: 95% !important;
            }
      
            .mobile-hide{ display: none !important; }
            .mobile-textcenter{ text-align: center !important; }
      
            .mobile-full{ 
              width: 100% !important;
              max-width: none !important;
            }
          }
          /* previously used also screen and (max-device-width: 600px) but Yahoo Mail doesn't support multiple queries */
        </style>
        <style type="text/css">
          
          #ko_singleArticleBlock_1 .links-color a, #ko_singleArticleBlock_1 .links-color a:link, #ko_singleArticleBlock_1 .links-color a:visited, #ko_singleArticleBlock_1 .links-color a:hover{
            color: #3f3f3f;
            color: #3f3f3f;
            text-decoration: underline
          }
          
          # .links-color a, # .links-color a:link, # .links-color a:visited, # .links-color a:hover{
            color: #cccccc;
            color: #cccccc;
            text-decoration: underline
          }
          </style>
        
      </head>
      <!--[if !(gte mso 16)]-->
      <body bgcolor="#3f3f3f" text="#919191" alink="#cccccc" vlink="#cccccc" style="margin: 0; padding: 0; background-color: #3f3f3f; color: #919191;"><!--<![endif]--><center>
      
        
      
        <table role="presentation" class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#bfbfbf" style="background-color: #bfbfbf;" id="ko_singleArticleBlock_1">
            <tbody><tr><td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0;">
            <!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]--><!--
            --><div style="margin: 0 auto; max-width: 570px; -mru-width: 0px;"><table role="presentation" border="0" cellpadding="0" cellspacing="9" bgcolor="#ffffff" width="570" class="vb-row" style="border-collapse: separate; width: 100%; background-color: #ffffff; mso-cellspacing: 9px; border-spacing: 9px; max-width: 570px; -mru-width: 0px;">
              
              <tbody><tr>
            <td align="center" valign="top" style="font-size: 0;"><div style="vertical-align: top; width: 100%; max-width: 552px; -mru-width: 0px;"><!--
              --><table role="presentation" class="vb-content" border="0" cellspacing="9" cellpadding="0" style="border-collapse: separate; width: 100%; mso-cellspacing: 9px; border-spacing: 9px;" width="552">
                
                <tbody><tr><td width="100%" valign="top" align="center" class="links-color" style="padding-bottom: 9px;"><!--[if (lte ie 8)]><div style="display: inline-block; width: 534px; -mru-width: 0px;"><![endif]--><img border="0" hspace="0" align="center" vspace="0" width="534" style="border: 0px; display: block; vertical-align: top; height: auto; margin: 0 auto; color: #3f3f3f; font-size: 13px; font-family: Arial, Helvetica, sans-serif; width: 100%; max-width: 534px; height: auto;" src="https://mosaico.io/srv/f-tmfyil5/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2Ftmfyil5%2FTGVM%2520%2520Astom%2520SA-Speedinnov%2520SAS%25202020.jpg&amp;method=resize&amp;params=534%2Cnull"><!--[if (lte ie 8)]></div><![endif]--></td></tr>
                <tr>
            <td width="100%" valign="top" align="left" style="font-weight: normal; color: #3f3f3f; font-size: 18px; font-family: Arial, Helvetica, sans-serif; text-align: left;"><span style="font-weight: normal;">Bonjour ! Prêt à passer un agréable moment lors de vos voyages en train ?</span></td>
          </tr>
                <tr><td class="long-text links-color" width="100%" valign="top" align="left" style="font-weight: normal; color: #3f3f3f; font-size: 13px; font-family: Avenir, Arial, Helvetica, sans-serif; text-align: left; line-height: normal;"><p style="margin: 1em 0px; margin-top: 0px;"><p><strong>Bienvenue sur le service de jeu et d'échange.</strong></p>
      <p style="margin: 1em 0px;"><strong>Vous pouvez à tout moment vous connecter au service grâce à votre identifiant et votre mot de passe.</strong></p>
      <p style="margin: 1em 0px;"><strong>Rendez-vous sur le site https://le-temps-d-un-voyage.netlify.app pour accéder à votre compte et découvrir plus d'informations sur nos services.</strong></p>
      <p style="margin: 1em 0px;">L'équipe Le Temps d'un Voyage est également à votre écoute sur les réseaux sociaux.</p>
      <p style="margin: 1em 0px;">A tout moment, vous pouvez consulter les conditions générales d'utilisation sur le site https://le-temps-d-un-voyage.netlify.app.</p>
      <p style="margin: 1em 0px;">&nbsp;</p>
      <p style="margin: 1em 0px;">En cas de questions, veuillez contacter notre service client par mail.</p>`,
    },
    (err, info) => {
      if (err) console.error(err);
      else console.warn(info);
    }
  );
};

module.exports = {
  sendEmail,
};
