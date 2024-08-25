'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

function Hero() {
  const container = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      {/* TODO: Add a bigger and more modern hero section */}
      {/* <Spotlight
        className="-top-40 left-0 [animation-delay:_6s] md:-top-20 md:left-60"
        fill="hsl(var(--foreground))"
      /> */}
      <div className="relative z-[5] mx-auto w-full">
        <div className="flex flex-col items-start">
          <div className="md:py-26 lg:py-30 xl:py-46 flex h-full w-full flex-col justify-center gap-8 px-4 py-24 text-4xl font-light leading-[89%] tracking-[-.04em] sm:text-5xl md:px-28 md:text-6xl lg:px-32 lg:text-7xl xl:py-48 xl:text-8xl">
            <p>A developer</p>
            <div className="flex items-center gap-2 md:gap-4">
              <p>Who</p>
              <motion.div className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full bg-[#f8cdd5]">
                <Image
                  src={'/images/hearts-ornament.png'}
                  style={{ objectFit: 'scale-down' }}
                  alt="img"
                  fill
                />
              </motion.div>
              <p>to code</p>
            </div>
          </div>
          <motion.div
            className="relative aspect-[4/2] w-screen"
            style={{ y, scale }}
          >
            <Image
              src={'/images/hero.jpg'}
              style={{ objectFit: 'cover' }}
              alt="img"
              fill
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
