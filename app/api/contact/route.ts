import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.re_6zz8sHue_JQzoXJCr1V9TTVidgZDo2r5k);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validasi sederhana
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Ganti nanti saat domain diverifikasi
      to: ["abid.ghufron@student.ac.id"], // Ganti dengan email kamu
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #FF6B35;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}