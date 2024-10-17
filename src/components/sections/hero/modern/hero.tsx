'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import Reveal from '@/components/reveal';
import ParallaxImage from '@/components/motion/parallax-image';

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          {/* items-center */}
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <TextReveal>A developer</TextReveal>
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

      <ParallaxImage
        src="/images/hero.jpg"
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-[4/2] w-screen lg:mt-28"
        priority
        parallaxOptions={{
          yStart: '-10%',
          yEnd: '10%',
          scaleStart: 1,
          scaleEnd: 1.5
        }}
      />
    </section>
  );
}

export default Hero;
