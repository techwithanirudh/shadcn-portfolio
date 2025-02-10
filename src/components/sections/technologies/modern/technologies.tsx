'use client';
import React, { useRef } from 'react';
import MotionWrap from '@/components/motion-wrap';
import TechnologyCard from './technology-card';

import { technologies } from '@/components/sections/technologies/config';
import TextReveal from '@/components/motion/text-reveal';

function Technologies() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="technologies">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              My Technologies
            </TextReveal>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the technologies I use in my projects
              </p>
            </div>
          </div>
          <div
            className="relative h-full w-full cursor-pointer items-center justify-center overflow-hidden"
            ref={containerRef}
          >
            <div className="flex h-full w-full flex-wrap items-center justify-start gap-4">
              {technologies.map((technology, index) => (
                <>
                  <TechnologyCard
                    key={`technology_${index}`}
                    name={technology.name}
                    containerRef={containerRef}
                  />

                  {index < technologies.length - 1 && (
                    <TechnologyCard
                      key={`technology_sep_${index}`}
                      name={','}
                      containerRef={containerRef}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Technologies;
