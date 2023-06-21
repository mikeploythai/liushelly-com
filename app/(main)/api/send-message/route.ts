import CustomEmail from "@/components/CustomEmail";
import validationSchema from "@/lib/validationSchema";
import { Resend } from "resend";
import sanitize from "sanitize-html";
import { ValidationError } from "yup";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export async function POST(req: Request) {
  const body = await req.json();

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
      await resend.emails.send({
        from: process.env.NEXT_PUBLIC_RESEND_FROM as string,
        to: process.env.NEXT_PUBLIC_RESEND_TO as string,
        subject: subject,
        react: CustomEmail({ name, email, subject, message }),
      });

      return new Response("OK", { status: 200 });
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return new Response("FAIL", {
        status: 400,
        statusText: JSON.stringify(error.errors),
      });
    }
  }
}
