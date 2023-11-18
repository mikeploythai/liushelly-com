"use server";

import { Resend } from "resend";
import ContactFormEmail from "~/app/_components/contact-form-email";
import { env } from "~/env.mjs";
import { contactFormSchema } from "./schema";

const resend = new Resend(env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/require-await
export default async function sendMessage(form: unknown) {
  const parsedEntries = contactFormSchema.safeParse(form);

  if (!parsedEntries.success) {
    let message = "";
    parsedEntries.error.issues.map((issue) => (message = issue.message));
    return { error: message };
  }

  const { name, email, subject, message } = parsedEntries.data;

  try {
    const { error } = await resend.emails.send({
      from: `${name} <${env.RESEND_FROM}>`,
      to: [env.RESEND_TO],
      subject,
      text: `
        Socials by Shelly\n
        From ${name} at ${email}\n
        Subject: ${subject}\n
        Message: ${message}
      `,
      react: ContactFormEmail({ name, email, subject, message }),
    });

    if (error) return { error: error.message };
  } catch (error) {
    if (error instanceof Error) return { error: error.message };
  }
}
