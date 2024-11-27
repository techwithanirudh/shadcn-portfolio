import { z } from 'zod';

export const ContactFormSchema = z.object({
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
  message: z.string().max(380).min(4, {
    message: 'Message must be at least 4 characters.'
  })
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

export const ContactActionSchema = ContactFormSchema.extend({
  token: z.string().min(1, {
    message: 'Token is required.'
  })
});

export type ContactAction = z.infer<typeof ContactActionSchema>;
