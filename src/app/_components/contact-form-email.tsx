import type { ContactFormSchema } from "~/lib/contact-form/schema";

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
}: ContactFormSchema) {
  return (
    <div>
      <h1>Socials by Shelly</h1>
      <p>
        From <b>{name}</b> at {email}
      </p>
      <p>Subject: {subject}</p>
      <p>{message}</p>
    </div>
  );
}
