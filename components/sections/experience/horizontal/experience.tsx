import React from 'react';
import SkillCard from './experience-card';

import Reveal from '@/components/reveal';

import { experiences } from '../config';
import MotionWrap from '@/components/motion-wrap';

function Skills() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="experiences"
    >
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
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
        <div className="mt-6 space-y-4">
          {experiences.map((experience, index) => (
            <SkillCard
              key={index}
              index={index + 1}
              name={experience.name}
              description={experience.description}
              Icon={experience.Icon}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
