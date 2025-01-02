import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

// import { metadata as meta } from '@/app/config';
import { hero } from '@/components/sections/hero/config';
import TextReveal from '@/components/motion/text-reveal';

function Hero() {
  return (
    <MotionWrap className="flex h-[calc(100dvh-theme(spacing.14))] w-full items-center justify-center">
      <div className="grid items-start justify-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
        <div className="space-y-3 text-left">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
            {hero.label}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hi, I&apos;m <TextReveal>{hero.name}</TextReveal>
          </h1>
          <TextReveal
            as="p"
            className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {hero.description}
          </TextReveal>
        </div>
        <Image
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          height="450"
          sizes="100vw"
          src={'/images/hero.jpg'}
          width="800"
          priority
        />
      </div>
    </MotionWrap>
  );
}

export default Hero;
