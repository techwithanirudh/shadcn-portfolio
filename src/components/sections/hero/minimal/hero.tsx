import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { hero } from '@/components/sections/hero/config';

function Hero() {
  return (
    <MotionWrap className="flex h-[calc(100dvh-theme(spacing.14))] w-full items-center justify-center">
      <div className="flex w-full items-center justify-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
        <div className="flex w-full items-center justify-center space-y-3 text-left">
          <div className="flex w-full max-w-screen-xl flex-col items-center justify-center">
            <div className="mb-6 inline-block w-fit rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
              {hero.label}
            </div>
            <h1 className="text-8xl font-bold tracking-tight md:text-9xl lg:self-start lg:text-[14rem]">
              {hero.name}
            </h1>
            <h1 className="text-8xl font-bold tracking-tight md:text-9xl lg:self-end lg:text-[14rem]">
              {hero.name}
            </h1>
          </div>
          {/* inspired by https://artistrytemplate.framer.website/ */}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Hero;
