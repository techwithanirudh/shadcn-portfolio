"use client";

import React, { useRef } from "react";
import SkillCard from "@/app/about/_components/skill-card";
import Link from "@/components/fancy/link";
import ImageTrail from "@/components/fancy/motion-trail";
import TextReveal from "@/components/fancy/text-reveal";
import { contact } from "@/components/sections/contact/config";
import ContactForm from "@/components/sections/contact/cozy/contact-form";
import { experiences } from "@/components/sections/experience/config";
import ExperienceCard from "@/components/sections/experience/cozy/experience-card";
import { skills } from "@/components/sections/skills/config";
import { technologies } from "@/components/sections/technologies/config";
import TechnologyCard from "@/components/sections/technologies/modern/technology-card";
import { exampleImages } from "@/lib/example-images";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@repo/ui";
import { Button, buttonVariants } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";
import { Separator } from "@repo/ui/separator";

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
      <section className="relative -mx-4 flex h-[calc(100svh-(--spacing(14)))] items-center justify-center overflow-hidden pb-12 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-24">
        <div className="absolute top-0 left-0 z-0" ref={heroRef}>
          <ImageTrail containerRef={heroRef}>
            {exampleImages.map((image, index) => (
              <div
                key={index}
                className="relative flex h-24 w-24 overflow-hidden"
              >
                <img
                  src={image}
                  alt="image"
                  loading="lazy"
                  className="absolute inset-0 object-cover"
                />
              </div>
            ))}
          </ImageTrail>
        </div>
        <div className="relative container mx-auto flex flex-col items-center px-4">
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Innovator
          </TextReveal>
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Designer
          </TextReveal>
          <motion.div
            className="mt-8"
            style={{ opacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icons.chevronDown className="h-8 w-8" />
          </motion.div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">About</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="space-y-8">
              <TextReveal
                as="h3"
                className="font-serif text-3xl leading-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                I create captivating designs by blending aesthetics, motion, and
                technology.
              </TextReveal>
              <TextReveal
                as="p"
                className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                My journey into creativity began with a spark of curiosity about
                how ideas could come to life on a screen. Fascinated by the
                interplay of design and technology, I started exploring web
                development, motion graphics, and interface design through
                self-driven projects. With every experiment, my skills grew, and
                what began as a hobby soon became a passion for crafting
                meaningful digital experiences. As I honed my abilities, I
                sought opportunities to apply them in real-world settings,
                turning concepts into polished outcomes. Today, my approach
                combines creativity, problem-solving, and technical expertise to
                create work that is both functional and impactful.
              </TextReveal>
              <Button asChild variant={"outline"} className="rounded-full px-6">
                <a href="resume.pdf" target="_blank">
                  View Resume <Icons.arrowUpRight className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {skills.map((skill, index) => (
                <SkillCard
                  key={`skill_${index}`}
                  index={index + 1}
                  name={skill.name}
                  description={skill.description}
                  thumbnail={skill.thumbnail}
                  className="flex rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Technologies</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div
              className="relative h-full w-full cursor-pointer items-center justify-center overflow-hidden"
              ref={testimonialsRef}
            >
              <div className="flex h-full w-full flex-wrap items-center justify-start gap-4">
                {technologies.map((technology, index) => (
                  <>
                    <TechnologyCard
                      key={`technology_${index}`}
                      name={technology.name}
                      containerRef={testimonialsRef}
                    />

                    {index < technologies.length - 1 && (
                      <TechnologyCard
                        key={`technology_sep_${index}`}
                        name={","}
                        containerRef={testimonialsRef}
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience_${index}`}
                  name={experience.name}
                  description={experience.description}
                  company={experience.company}
                  duration={experience.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Contact</h2>
            <div className="mt-2 flex flex-col gap-1">
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-min w-min p-0 text-sm font-normal sm:text-base md:text-lg",
                )}
                href={`mailto:${contact.email}`}
              >
                <Icons.mail className="h-4 w-4" />
                {contact.email}
              </Link>
              {contact.socials.map(({ Icon, name, href }, index) => (
                <Link
                  target="_blank"
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "h-min w-min gap-1 p-0 text-sm sm:text-base md:text-lg",
                  )}
                  key={`contact-social_${index}`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
