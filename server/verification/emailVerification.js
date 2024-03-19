import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const clientURL = process.env.CLIENT_URL;

export const emailVerification = async (token, email) => {
  const info = await transporter.sendMail({
    from: '"Simona-1973" <simona1973flowers@gmail.com>',
    to: email,
    subject: "Welcome to Our Simona App - Email Verification",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <h1 style="color: #333;">Welcome to our Simona App</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">Dear user,</p>
            <p style="font-size: 16px;">Thank you for signing up to our Simona App. To start enjoying our services, please verify your email by clicking the button below:</p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="${clientURL}/email-confirmation/${token}" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Verify My Email</a>
            </div>
            <p style="font-size: 16px;">If you didn't create an account on our platform, you can safely ignore this email.</p>
            <p style="font-size: 16px;">Thank you!</p>
            <p style="font-size: 16px;">The 1973 Team</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <p style="font-size: 14px; color: #666;">This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
  });

  console.log("Message sent: %s", info.messageId);
};

// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//       <https://github.com/forwardemail/preview-email>
// http://localhost:5173/emailconfirm/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyOGE5NjZiZjVjNTI0Y2IwMmRiYWIiLCJpYXQiOjE3MDcyNDgyNzgsImV4cCI6MTcwNzMzNDY3OH0.b1XLnhQrOxfCKzUtBGneyBDGE_k2cpOPQi1ZomsaHcE

export const changePassVerification = async (token, email) => {
  const info = await transporter.sendMail({
    from: '"Simona-1973" <simona1973flowers@gmail.com>',
    to: email,
    subject: "Password Change - Confirmation",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <h1 style="color: #333;">Password Change</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">Dear user,</p>
            <p style="font-size: 16px;">You've requested to change your password. To proceed, please click the button below:</p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="${clientURL}/changepassword/${token}" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Change Password</a>
            </div>
            <p style="font-size: 16px;">If you didn't request this change, please ignore this email.</p>
            <p style="font-size: 16px;">Thank you!</p>
            <p style="font-size: 16px;">The 1973 Team</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <p style="font-size: 14px; color: #666;">This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
  });

  console.log("Message sent: %s", info.messageId);
};
