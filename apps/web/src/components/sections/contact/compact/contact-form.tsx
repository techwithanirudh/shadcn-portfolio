"use client";

import { useState } from "react";
import { contactSubmit } from "@/app/actions";
import { FormError } from "@/components/sections/contact/_components/form-error";
import { FormSuccess } from "@/components/sections/contact/_components/form-success";
import { TurnstileModal } from "@/components/sections/contact/_components/turnstile-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { ContactForm as ContactFormType } from "@repo/validators";
import { Button } from "@repo/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/form";
import { Icons } from "@repo/ui/icons";
import { Input } from "@repo/ui/input";
import { Textarea } from "@repo/ui/textarea";
import { ContactFormSchema } from "@repo/validators";

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { execute, result, status } = useAction(contactSubmit);
  const [isOpen, setIsOpen] = useState(false);

  // todo: probably refactor this, setIsOpen is not clean
  // values: ContactFormType
  function onSubmit() {
    setIsOpen(true);
  }

  function onVerify(token?: string) {
    setIsOpen(false);
    if (!token) {
      toast.error(
        "Captcha validation failed. Please ensure the captcha is completed.",
        {
          position: "bottom-center",
        },
      );
      return;
    }
    execute({ ...form.getValues(), token });
  }

  return (
    <div>
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
                    disabled={status === "executing"}
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
                    disabled={status === "executing"}
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
                    disabled={status === "executing"}
                    placeholder={
                      "Hello!\n\nThis is Jane Doe, from Example. Just wanted to say hi!"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={result.serverError} />
          <FormSuccess message={result.data?.success} />

          <Button
            disabled={status === "executing"}
            type="submit"
            className={"w-full"}
          >
            {status === "executing" && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </Button>
        </form>
      </Form>
      <TurnstileModal open={isOpen} callback={onVerify} />
    </div>
  );
}
