'use client';

import React, { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import Reveal from '@/components/reveal';
import ParallaxImage from '@/components/motion/parallax-image';
import { TextLoop } from '@/components/motion/text-loop';

const heroContent = [
  { role: 'developer', action: 'code', emoji: '💻', bgColor: 'bg-green-100' },
  { role: 'gamer', action: 'win', emoji: '🎮', bgColor: 'bg-blue-100' },
];

const textLoopVariants = {
  initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
  animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
  exit: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' },
};

const textLoopTransition = {
  type: 'spring',
  stiffness: 900,
  damping: 80,
  mass: 10,
};

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <TextReveal>
                A{' '}
                <TextLoop
                  className="overflow-y-clip"
                  transition={textLoopTransition}
                  variants={textLoopVariants}
                >
                  {heroContent.map((content, index) => (
                    <span key={index}>{content.role}</span>
                  ))}
                </TextLoop>
              </TextReveal>
              <br />
              <span className="flex items-center gap-2 md:gap-4">
                <Reveal>Who</Reveal>
                <TextReveal>
                  <TextLoop
                    className="overflow-y-clip"
                    transition={textLoopTransition}
                    variants={textLoopVariants}
                  >
                    {heroContent.map((content, index) => (
                      <span 
                        key={index}
                        className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full md:mx-4 md:h-[7.8rem] ${content.bgColor}`}
                      >
                        <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-7xl">
                          {content.emoji}
                        </span>
                      </span>
                    ))}
                  </TextLoop>
                </TextReveal>
                <Reveal>to</Reveal>
                <TextReveal>
                  <TextLoop
                    className="overflow-y-clip"
                    transition={textLoopTransition}
                    variants={textLoopVariants}
                  >
                    {heroContent.map((content, index) => (
                      <span key={index}>{content.action}</span>
                    ))}
                  </TextLoop>
                </TextReveal>
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

