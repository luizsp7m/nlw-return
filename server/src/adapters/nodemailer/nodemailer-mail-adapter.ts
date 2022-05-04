import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1a3f80e8332bcc",
    pass: "7defefbf062560"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <luiz@feedget.com>",
      to: "Luiz Oliveira <luizoliveira2808@gmail.com>",
      subject,
      html: body,
    });
  }
}