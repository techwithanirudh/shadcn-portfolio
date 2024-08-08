'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { LoaderCircleIcon, PlusIcon } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';

interface ValidationErrors {
  success: boolean;
  message: string;
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    message?: string[] | undefined;
  };
}

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {
  state: ValidationErrors;
}

export default function ContactForm({ state }: ContactFormProps) {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="grid gap-3">
        <Label
          htmlFor="name"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.name && 'text-red-500 dark:text-red-900'
          )}
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Jane Doe"
          required
          disabled={pending}
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.name}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="email"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.email && 'text-red-500 dark:text-red-900'
          )}
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="jane@example.com"
          required
          type="email"
          disabled={pending}
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.email}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="message"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            state?.errors?.message && 'text-red-500 dark:text-red-900'
          )}
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={
            'Hello!\n\nThis is Jane Doe, from Example. Just wanted to say hi!'
          }
          required
          disabled={pending}
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.message}
        </p>
      </div>

      <Button type="submit" disabled={pending}>
        {pending && <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />}
        Submit
      </Button>
    </>
  );
}
