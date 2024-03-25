import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.GMAIL_SERVER,
  port: process.env.GMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendEmail = async (senderEmail, subject, message) => {
  try {
    await transporter.sendMail({
      from: senderEmail, 
      to: process.env.GMAIL_USER, 
      subject: subject,
      text: message,
      replyTo: senderEmail
    });
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
};

export default sendEmail;

 
