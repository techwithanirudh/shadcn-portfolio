import React from 'react';
import SkillCard from './skill-card';

import Reveal from '@/components/reveal';

import { skills } from '@/components/sections/skills/config';
import MotionWrap from '@/components/motion-wrap';
import { Accordion } from '@/components/ui/accordion';

function Skills() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Skills
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my skills where I&apos;ve turned knowledge into
            expertise, making things happen.
          </p>
        </div>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                index={index + 1}
                name={skill.name}
                description={skill.description}
                Icon={skill.Icon}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
