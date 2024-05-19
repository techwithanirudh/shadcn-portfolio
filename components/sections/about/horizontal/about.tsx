import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';

function About() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="about"
    >
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex flex-col items-center lg:items-start">
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              About
            </h2>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              Me
            </h2>
          </Reveal>
        </div>
        <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I am a passionate and creative Web Developer with a love for beautiful
          and functional websites. I have experience working with a variety of
          web technologies and frameworks and I am always eager to learn new
          things and take on new challenges.
        </p>
      </div>
    </MotionWrap>
  );
}

export default About;
