'use client';

import { useAction } from 'next-safe-action/hooks';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { TurnstileModal } from '@/components/sections/contact/_components/turnstile-modal';
import { LoaderCircleIcon } from 'lucide-react';
import { contactSubmit } from '@/app/actions';
import { FormError } from '@/components/sections/contact/_components/form-error';

import {
  ContactForm as ContactFormType,
  ContactFormSchema
} from '@/lib/validators';
import { FormSuccess } from '@/components/sections/contact/_components/form-success';

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const { execute, result, status } = useAction(contactSubmit);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    execute(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jane Doe"
                  disabled={status === 'executing'}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="jane@example.com"
                  disabled={status === 'executing'}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  disabled={status === 'executing'}
                  placeholder={
                    'Hello!\n\nThis is Jane Doe, from Example. Just wanted to say hi!'
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={result.serverError || result.data?.failure} />
        <FormSuccess message={result.data?.success} />

        <Button
          disabled={status === 'executing'}
          type="submit"
          className={'w-full'}
        >
          {status === 'executing' && (
            <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Submit
        </Button>

        {/* todo: refactor the form to use zod form or built-in validation, and refactor the modal to activate when the button is not disabled, and clickign on the submit the modal opens verifying it says then it closes and submitting current buttons shows and */}
      </form>
    </Form>
  );
}

// const { pending } = useFormStatus();
