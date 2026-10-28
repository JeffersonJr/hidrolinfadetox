import { createServerFn } from '@tanstack/react-start';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site';

export const submitContact = createServerFn({ method: 'POST' })
  .validator((data: { name: string; email: string; phone: string; message: string }) => data)
  .handler(async ({ data }) => {
    if (!process.env.SMTP_PASS) {
      throw new Error("SMTP_PASS variable is not defined");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465, // SSL
      secure: true,
      auth: {
        user: process.env.SMTP_USER || siteConfig.contact.email,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${siteConfig.name} Site" <${process.env.SMTP_USER || siteConfig.contact.email}>`,
        to: siteConfig.contact.email,
        replyTo: data.email,
        subject: `Novo Contato - ${data.name}`,
        text: `Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}\nMensagem: ${data.message}`,
        html: `
          <h3>Novo Contato pelo Site</h3>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefone:</strong> ${data.phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      });
      return { success: true };
    } catch (error: any) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  });
