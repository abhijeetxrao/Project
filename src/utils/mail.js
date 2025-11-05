import nodemailer from "nodemailer";
import Mailgen from "mailgen";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });

  const emailBody = mailGenerator.generate(options.mailGenContent);
  const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_SMTP_USERNAME,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  })

  const mail = {
    from: 'sendtest@gmail.com',
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailBody,
  }

  try {
    await transporter.sendMail(mail)
  } catch (error) {
    console.log("Error", error);
  }
};

const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! We are happy to onboard you!",
      action: {
        instructions: "To verify Email, Click here!",
        button: {
          color: "#22BC66",
          text: "Confirm your account",
          link: verificationUrl,
        },
      },
      outro: "Reply us back in case of any problem!",
    },
  };
}

const forgotPasswordMailContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request from you to reset Password!",
      action: {
        instructions: "To reset Password, click button!",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro: "Reply us back in case of any problem!",
    },
  };
};

export {emailVerificationMailGenContent, forgotPasswordMailContent}