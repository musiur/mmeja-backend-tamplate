const nodemailer = require("nodemailer")

const Mail = (toSend, subject, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "musiur.dev@gmail.com",
      pass: "chheaugdfnutemjz",
    },
  })

  const mailOptions = {
    from: "musiur.dev@gmail.com",
    to: toSend,
    subject,
    text: `Click to the click to verify your account: ${link}`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return {
        message: "Mail not sent!",
        error,
      }
    } else {
      console.log("Mail sent successfully!")
      return {
        message: "Mail sent successfully!",
      }
    }
  })
}

module.exports = Mail;
