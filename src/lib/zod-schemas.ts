import { z } from "zod";

export const sendMessageSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  subject: z.string().min(1).max(100),
  message: z.string().min(1).max(300),
});
