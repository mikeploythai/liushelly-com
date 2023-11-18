import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email("Invalid email."),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z
    .string()
    .min(5, { message: "Message is must be at least 5 characters." }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
