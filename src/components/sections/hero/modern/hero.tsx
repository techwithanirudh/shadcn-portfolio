'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '@/components/text-reveal';
import Reveal from '@/components/reveal';

function Hero() {
  const container = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 md:-mt-28 h-[50rem] md:h-[68rem] md:min-h-[50dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full px-4 md:px-[10.625vw]">
            <h1 className="text-4xl sm:text-5xl font-light md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <RevealText>A developer</RevealText>
              <br />
              {/* className="whitespace-nowrap" */}
              <span className="flex items-center gap-2 md:gap-4">
                <Reveal>Who</Reveal>
                <motion.span className="relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full bg-[#f8cdd5] md:mx-4 md:h-[7.8rem]">
                  <Image
                    src={'/images/hearts-ornament.png'}
                    style={{ objectFit: 'scale-down' }}
                    alt="img"
                    fill
                  />
                </motion.span>
                <Reveal>to</Reveal>
                <Reveal>code</Reveal>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <motion.div
        className="relative mt-28 aspect-[4/2] w-screen"
        style={{ y, scale }}
      >
        <Image
          src={'/images/hero.jpg'}
          style={{ objectFit: 'cover' }}
          alt="img"
          fill
        />
      </motion.div>
    </section>
  );
}

export default Hero;
