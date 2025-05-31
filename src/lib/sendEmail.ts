import nodemailer from "nodemailer";

export async function sendEmail(
  to: string,
  subject: string,
  htmlContent: string
) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"PrometeonDev" <${import.meta.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("❌ Error al enviar el correo:", error);
  }
}
