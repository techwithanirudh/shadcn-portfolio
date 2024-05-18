"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

import { contactSubmit } from "@/app/actions";

import { useFormState } from "react-dom";
import { useEffect } from "react";

const initialState = {
  errors: {},
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(contactSubmit, initialState);

  useEffect(() => {
    if (state?.message === "") return;

    toast({
      title: state?.message,
    });
  }, [state]);

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-3">
        <Label
          htmlFor="name"
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            state?.errors?.name && "text-red-500 dark:text-red-900",
          )}
        >
          Name
        </Label>
        <Input id="name" name="name" placeholder="Jane Doe" required />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.name}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="email"
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            state?.errors?.email && "text-red-500 dark:text-red-900",
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
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.email}
        </p>
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="message"
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            state?.errors?.message && "text-red-500 dark:text-red-900",
          )}
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={
            "Hello!\n\nThis is Jane Doe, from Example. Just wanted to say hi!"
          }
          required
        />
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {state?.errors?.message}
        </p>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
