const nodemailer = require('nodemailer');

export class MailUtils {

  async sendEmail(mailOption: MailOptions) {

    let { to, subject, text, attachments, html } = mailOption;

    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      host: process.env.HOST, // Replace with your SMTP server hostname
      port: process.env.PORT,
      secure: false, // SMTP port (587 for TLS, 465 for SSL)
      // Use the SMTP service
      auth: {
        user: process.env.AUTH_USER, // Your email address
        pass: process.env.AUTH_PASS, // Your email password
      },
    });

    let SENDER_EMAIL_ADDRESS = process.env.SENDER_EMAIL_ADDRESS;
    const msg = {
      to: to,
      from: SENDER_EMAIL_ADDRESS,
      subject: subject,
      text: text,
      html: html,
      attachments: attachments,
    };

    try {
      let data = await transporter.sendMail(msg);
      console.log('Mailsended succefully---->',to);
    } catch (error) {
      console.log(error);
    }
  }
}

export interface MailOptions {
  to: string[];
  subject: string;
  text?: string;
  html: string;
  attachments?: AttachmentOptions[];
}

export interface AttachmentOptions {
  filename: string;
  content: any;
  type?: string;
  disposition?: string;
}
