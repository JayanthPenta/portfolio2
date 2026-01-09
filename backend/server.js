import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware (VERY IMPORTANT)
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// CONTACT ROUTE (THIS IS THE IMPORTANT PART)
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    // 🔴🔴🔴 THIS IS THE LINE YOU WERE ASKING ABOUT 🔴🔴🔴
    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    // backend MUST respond even on error
    res.status(500).json({ message: "Server error" });
  }
});

// Render port (DO NOT CHANGE)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
