import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";
import { z } from "zod";

import { env as authEnv } from "@repo/auth/env";
import { env as emailsEnv } from "@repo/emails/env";

export const flags = {
  comment: process.env.NEXT_PUBLIC_FLAG_COMMENT === "true",
  auth: process.env.NEXT_PUBLIC_FLAG_AUTH === "true",
  contact: process.env.NEXT_PUBLIC_FLAG_CONTACT === "true",
  captcha: process.env.NEXT_PUBLIC_FLAG_CAPTCHA === "true",
};

export const env = createEnv({
  extends: [
    // flags.contact ? emailsEnv : {},
    // flags.auth ? authEnv : {},
    vercel(),
  ],
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  /**
   * Specify your server-side environment variables schema here.
   * This way you can ensure the app isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),

    ...(flags.contact
      ? {
          EMAIL_FROM: z.string().min(1),
          EMAIL_TO: z.string().min(1),
        }
      : {}),

    ...(flags.captcha
      ? {
          TURNSTILE_SECRET_KEY: z.string().min(1),
        }
      : {}),
  },

  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
    NEXT_PUBLIC_FLAG_COMMENT: z.string().min(1).optional(),
    NEXT_PUBLIC_FLAG_AUTH: z.string().min(1).optional(),
    NEXT_PUBLIC_FLAG_CONTACT_FORM: z.string().min(1).optional(),
    NEXT_PUBLIC_FLAG_CAPTCHA: z.string().min(1).optional(),

    ...(flags.captcha
      ? {
          NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1),
        }
      : {}),
  },
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_FLAG_CONTACT_FORM: process.env.NEXT_PUBLIC_FLAG_CONTACT_FORM,
    NEXT_PUBLIC_FLAG_AUTH: process.env.NEXT_PUBLIC_FLAG_AUTH,
    NEXT_PUBLIC_FLAG_COMMENT: process.env.NEXT_PUBLIC_FLAG_COMMENT,
    NEXT_PUBLIC_FLAG_CAPTCHA: process.env.NEXT_PUBLIC_FLAG,

    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  emptyStringAsUndefined: true,
  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
