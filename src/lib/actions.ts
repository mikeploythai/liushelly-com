"use server";

import { sendMessageSchema } from "./zod-schemas";

// eslint-disable-next-line @typescript-eslint/require-await
export async function sendMessage(form: unknown) {
  const parsedEntries = sendMessageSchema.safeParse(form);

  if (!parsedEntries.success) {
    let message = "";
    parsedEntries.error.issues.map((issue) => (message = issue.message));
    return { error: message };
  }
}
