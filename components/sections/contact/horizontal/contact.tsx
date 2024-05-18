import React from 'react'
import { Button } from '@/components/ui/button'
import MotionWrap from '@/components/motion-wrap'

import {
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from 'lucide-react'
import ContactForm from './contact-form'

function Contact() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="contact"
    >
      {/* TODO: Redesign for horizontal */}
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Send me a message using
              the form below.
            </p>
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href="https://youtube.com">
                  <YoutubeIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href="https://twitter.com">
                  <TwitterIcon className="h-4 w-4" />{' '}
                  {/* good 'ol twitter icon */}
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href="https://github.com">
                  <GithubIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href="https://linkedin.com">
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionWrap>
  )
}

export default Contact
