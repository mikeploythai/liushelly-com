import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    RESEND_API_KEY: z.string().min(1),
    RESEND_FROM: z.string().email(),
    RESEND_TO: z.string().email(),
    SANITY_API_REVALIDATE_SECRET: z.string().min(1),
    SANITY_API_READ_TOKEN: z.string().min(1),
    BASE_URL: z.string().url(),
    CRON_SECRET: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM: process.env.RESEND_FROM,
    RESEND_TO: process.env.RESEND_TO,
    SANITY_API_REVALIDATE_SECRET: process.env.SANITY_API_REVALIDATE_SECRET,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    BASE_URL: process.env.BASE_URL,
    CRON_SECRET: process.env.CRON_SECRET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
