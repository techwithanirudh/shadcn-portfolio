"use client";

import React from "react";
import MotionWrap from "@/components/motion-wrap";
import { contact } from "@/components/sections/contact/config";

import { cn } from "@repo/ui";
import { buttonVariants } from "@repo/ui/button";

import ContactForm from "./contact-form";

function Contact() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="contact">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Send me a message using
              the form.
            </p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a className="hover:underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <div className="flex space-x-1">
              {contact.socials.map(({ Icon, href }, index) => (
                <a
                  target="_blank"
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "text-md gap-1",
                  )}
                  key={`contact-social_${index}`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
