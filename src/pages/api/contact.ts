import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, message } = req.body;

    const msg = {
      to: "ianvirtue101@gmail.com",
      from: email,
      subject: "Contact form submission",
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    };

    await sgMail.send(msg);

    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false });
  }
};
