'use client';
import TextReveal from '@/components/motion/text-reveal';

import React from 'react';
import { ArrowUpRightIcon, MailIcon } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import Reveal from '@/components/reveal';

import SkillCard from '@/components/sections/skills/cozy/skill-card';
import { skills } from '@/components/sections/skills/config';
import { Footer } from '@/components/sections';
import ContactForm from '@/components/sections/contact/cozy/contact-form';
import { contact } from '@/components/sections/contact/config';

import Link from '@/components/motion/link';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <>
      <main className="flex-1 p-6">
        <section className="flex h-[calc(100svh-theme(spacing.14))] items-center pb-12">
          <div className="container relative mx-auto flex flex-col items-center px-4">
            <h1 className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <Reveal>Innovator</Reveal>
            </h1>
            <h1 className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <Reveal>Designer</Reveal>
            </h1>
          </div>
        </section>

        <Separator />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-3">
                <h2 className="text-xl font-semibold">About</h2>
              </div>
              <div className="col-span-9">
                <div className="max-w-4xl space-y-8">
                  <h3 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                    <TextReveal>
                      I create captivating designs by blending aesthetics,
                      motion, and technology.
                    </TextReveal>
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    <TextReveal>
                      I am a passionate and creative Web Developer with a love
                      for beautiful and functional websites. I have experience
                      working with a variety of web technologies and frameworks
                      and I am always eager to learn new things and take on new
                      challenges.
                    </TextReveal>
                  </p>
                  <Button
                    asChild
                    variant={'outline'}
                    className="rounded-full px-6"
                  >
                    <a href="resume.pdf" target="_blank">
                      View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
              </div>

              <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-2">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={`skill_${index}`}
                      index={index + 1}
                      name={skill.name}
                      description={skill.description}
                      thumbnail={skill.thumbnail}
                      className="flex h-48 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Contact
                </h2>
                <div className="flex flex-col gap-1">
                  <Link
                    className={cn(
                      buttonVariants({ variant: 'link' }),
                      'text-md h-min w-min p-0 font-normal'
                    )}
                    href={`mailto:${contact.email}`}
                  >
                    <MailIcon className="h-4 w-4" />
                    {contact.email}
                  </Link>
                  {contact.socials.map(({ Icon, name, href }, index) => (
                    <Link
                      target="_blank"
                      href={href}
                      className={cn(
                        buttonVariants({ variant: 'link' }),
                        'text-md h-min w-min gap-1 p-0'
                      )}
                      key={`contact-social_${index}`}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-9">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
