import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MotionWrap from "@/components/MotionWrap";

function Contact() {
  return (
    <MotionWrap
      className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200 dark:border-gray-700"
      id="contact"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to work together? Send me a message using
              the form below.
            </p>
          </div>
          <div className="grid gap-4">
            <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
