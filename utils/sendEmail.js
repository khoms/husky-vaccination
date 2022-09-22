const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  SMTP_HOST = "smtp.gmail.com";
  SMTP_PORT = "465";
  SMTP_EMAIL = "ib.chhetri321@gmail.com";
  SMTP_PASSWORD = "ytrxxlpckpcxqmhq";
  SMTP_FROM_EMAIL = "husky-circle@gmail.com";
  SMTP_FROM_NAME = " Husky Vaccination";

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    // service: "gmail",
    // secure: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  //   SMTP_HOST=smtp.hostinger.com
  // SMTP_PORT=465
  // SMTP_EMAI=huskycircle@sandeshworks.com
  // SMTP_PASSWORD=sandesh@12345
  // SMTP_FROM_EMAIL=huskycircle@sandeshworks.com
  // SMTP_FROM_NAME=Husky Circle

  const message = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
