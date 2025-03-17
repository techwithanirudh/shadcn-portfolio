"use server";

import "server-only";

import { env, flags } from "@/env";
import { actionClient, ActionError } from "@/lib/safe-action";
import { validateTurnstileToken } from "@/lib/turnstile";
import { Resend } from "resend";

import { Contact } from "@repo/emails";
import { ContactActionSchema } from "@repo/validators";

const EMAIL_FROM = env.EMAIL_FROM;
const EMAIL_TO = env.EMAIL_TO;

export const contactSubmit = actionClient
  .use(async ({ next, clientInput }) => {
    const data = clientInput as {
      token?: string;
    };

    if (!data.token)
      throw new ActionError(
        "Captcha validation failed. Please ensure the captcha is completed.",
      );
    const res = await validateTurnstileToken(data.token);

    if (!res.success) {
      throw new ActionError(
        "Captcha validation failed. Please ensure the captcha is completed.",
      );
    }

    return next();
  })
  .schema(ContactActionSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    if (!flags.contact) {
      throw new Error("Contact form is disabled");
    }

    const resend = new Resend(env.RESEND_API_KEY);

    const { data: res, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Message from ${name} on Portfolio`,
      react: Contact({ name, email, message }),
    });

    if (res)
      return {
        success:
          "Thank you for reaching out! Your message has been successfully sent.",
      };
    if (error) throw new Error(JSON.stringify(error));
  });
