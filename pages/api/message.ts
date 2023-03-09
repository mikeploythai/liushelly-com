import validationSchema from "@/lib/validationSchema";
import { FormikErrors, FormikValues } from "formik";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import sanitize from "sanitize-html";

const MessageSender = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    service: process.env.NEXT_PUBLIC_MAIL_SERVICE,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  const safeText = () => {
    Object.keys(req.body).forEach((key) => {
      req.body[key] = sanitize(req.body[key], {
        disallowedTagsMode: "escape",
        allowedTags: [],
      });
    });

    return req.body;
  };

  const { name, email, subject, message } = safeText();

  try {
    await validationSchema.validate({ name, email, subject, message });

    if (await validationSchema.isValid({ name, email, subject, message })) {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: `${process.env.NEXT_PUBLIC_MAIL_USER}`,
        subject: `${subject}`,
        text: `${message}`,
        html: `
          <p>
            From ${name},
            <br><br>
            "${message}"
            <br><br>
            <a href="mailto:${email}?subject=RE:${subject}">
              Click here to reply back to them! (${email})
            </a>
          </p>
        `,
      });

      res.status(200).setHeader("Content-Type", "application/json");
    }
  } catch (error) {
    const e = error as FormikErrors<FormikValues>;
    res.status(400).json(e.errors);
  }

  res.end();
};

export default MessageSender;
