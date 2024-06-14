// Credit: Cuberto

import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

import { metadata as meta } from '@/app/config';
import { hero } from '../config';
import { Spotlight } from '@/components/ui/spotlight';

function Hero() {
  return (
    <MotionWrap className="relative w-full overflow-hidden bg-background/[0.96]">
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
              <div className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full bg-[#f8cdd5]">
                <Image
                  src={'/images/hearts-ornament.png'}
                  style={{ objectFit: 'scale-down' }}
                  alt="img"
                  fill
                />
              </div>
              <p>to code</p>
            </div>
          </div>
          <div className="relative aspect-[4/2] w-screen">
            <Image
              src={'/images/hero.jpg'}
              style={{ objectFit: 'cover' }}
              alt="img"
              fill
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Hero;
