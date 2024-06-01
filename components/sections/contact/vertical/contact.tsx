import React from 'react';
import { Button } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';

import {
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from 'lucide-react';
import ContactForm from './contact-form';

import { contact } from '../config';

function Contact() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="contact"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Send me a message using
              the form.
            </p>
            <p className="text-muted-foreground">
              Email:{' '}
              <a className="hover:underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <div className="flex space-x-1">
              {contact.socials?.github && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.youtube}>
                    <YoutubeIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact.socials?.twitter && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.twitter}>
                    <TwitterIcon className="h-4 w-4" />{' '}
                    {/* good 'ol twitter icon */}
                  </a>
                </Button>
              )}
              {contact.socials?.github && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.github}>
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact.socials?.linkedin && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.linkedin}>
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="grid gap-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
