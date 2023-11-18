"use server";

import ContactFormEmail from "react-email/contact-form-email";
import { Resend } from "resend";
import { serverEnv } from "~/env/server.mjs";
import { contactFormSchema } from "./schema";

const resend = new Resend(serverEnv.RESEND_API_KEY);

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
      from: `${name} <${serverEnv.RESEND_FROM}>`,
      to: [serverEnv.RESEND_TO],
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
