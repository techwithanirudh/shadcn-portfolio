'use server';
import 'server-only';

import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/contact-template';

import { validateTurnstileToken } from '@/lib/turnstile';
import { actionClient, ActionError } from '@/lib/safe-action';
import { ContactActionSchema } from '@/lib/validators';

const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export const contactSubmit = actionClient
  .use(async ({ next, clientInput }) => {
    const data = clientInput as {
      token?: string;
    };

    if (!data?.token)
      throw new ActionError(
        'Captcha validation failed. Please ensure the captcha is completed.'
      );
    const res = await validateTurnstileToken(data.token);

    if (!res.success) {
      throw new ActionError(
        'Captcha validation failed. Please ensure the captcha is completed.'
      );
    }

    return next();
  })
  .schema(ContactActionSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // todo: replace hook form of contact with https://github.com/next-safe-action/adapter-react-hook-form
    if (!EMAIL_FROM || !EMAIL_TO) {
      throw new Error('Contact form configuration missing');
    }

    const { data: res, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Message from ${name} on Portfolio`,
      react: ContactEmail({ name, email, message })
    });

    if (error) throw new Error(JSON.stringify(error));

    return {
      success: 'Thank you for reaching out! Your message has been sent.'
    };
  });
