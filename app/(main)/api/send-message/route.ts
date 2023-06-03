import validationSchema from "@/lib/validationSchema";
import { FormikErrors, FormikValues } from "formik";
import nodemailer from "nodemailer";
import sanitize from "sanitize-html";

export async function POST(req: Request) {
  const body = await req.json();
  const transporter = nodemailer.createTransport({
    service: process.env.NEXT_PUBLIC_MAIL_SERVICE,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  function escapedText() {
    Object.keys(body).forEach((key) => {
      body[key] = sanitize(body[key], {
        disallowedTagsMode: "escape",
        allowedTags: [],
      });
    });

    return body;
  }

  const { name, email, subject, message } = escapedText();

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

      return new Response("OK", { status: 200 });
    }
  } catch (error) {
    const e = error as FormikErrors<FormikValues>;
    return new Response("FAIL", {
      status: 400,
      statusText: JSON.stringify(e.errors),
    });
  }
}
