'use server';
import 'server-only';

import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/contact-template';

import { z } from 'zod';
import { validateTurnstileToken } from '@/lib/turnstile';
import { actionClient } from '@/lib/safe-action';
import { ContactFormSchema } from '@/lib/validators';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.'
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.'
    }),
  email: z
    .string({
      required_error: 'Please enter a valid email.'
    })
    .email(),
  message: z.string().max(380).min(4)
});

const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export const contactSubmit = actionClient
  .schema(ContactFormSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // const isValid = await validateTurnstileToken(token as string);
    //
    // if (!isValid.success)
    //   return {
    //     failure: 'Oops! Failed to validate turnstile.'
    //   };

    if (!EMAIL_FROM || !EMAIL_TO) {
      return {
        failure: 'Oops! Something went wrong. Please try again later.'
      };
    }

    const { data: res, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Message from ${name} on Portfolio`,
      react: ContactEmail({ name, email, message })
    });

    if (error) {
      return {
        failure: 'Oops! Something went wrong. Please try again later.'
      };
    }

    return {
      success: 'Thank you for reaching out! Your message has been sent.'
    };
  });
