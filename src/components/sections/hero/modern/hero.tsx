'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '@/components/reveal-text';
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
      <div className="relative z-10 h-[50rem] md:h-[68rem] md:min-h-[50dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="w-full px-[10.625vw]">
            <div className="text-4xl font-light leading-[89%] tracking-[-.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <RevealText>A developer</RevealText>
              <span>
                <RevealText>Who</RevealText>
                <motion.div className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full bg-[#f8cdd5]">
                  <Image
                    src={'/images/hearts-ornament.png'}
                    style={{ objectFit: 'scale-down' }}
                    alt="img"
                    fill
                  />
                </motion.div>
                <RevealText>to code</RevealText>
              </span>
            </div>
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
