import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export const POST = async (req: NextRequest) => {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this if using another provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
};
