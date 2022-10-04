// sendEmail.js

const mailer = require("./mailer");

// eslint-disable-next-line no-unused-vars
const sendEmail = (req, res) => {
  const { email } = req.body;

  mailer.sendMail(
    {
      from: "naim-aouchiche_student2022@wilder.school",
      to: email,
      subject: `Bienvenue ${req.body.firstname}`,
      text: "Tu es prêt à jouer?",
      html: "<p>Tu es prêt à jouer?</p>",
    },
    (err, info) => {
      if (err) console.error(err);
      // eslint-disable-next-line no-restricted-syntax
      else console.log(info);
    }
  );
};

module.exports = {
  sendEmail,
};
