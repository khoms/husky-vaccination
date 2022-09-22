const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
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
