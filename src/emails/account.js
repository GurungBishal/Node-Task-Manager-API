const sgMail = require("@sendgrid/mail");
const { text } = require("express");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gurung.biishal88@gmail.com",
    subject: "Thanx for joining",
    text: `Welcome ${name}`,
    html: "<p>Welcome Home</p>",
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gurung.biishal88@gmail.com",
    subject: "Email cancellation",
    text: `We're sorry to see you leave ${name}`,
    html: "<p>Please come back when yu change your mind</p>",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
