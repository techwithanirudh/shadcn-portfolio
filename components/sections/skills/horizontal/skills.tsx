import React from "react";
import SkillCard from "./skill-card";

import Reveal from "@/components/reveal";

import { skills } from "../config";
import MotionWrap from "@/components/motion-wrap";

function Skills() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  dark:border-gray-700 py-24 lg:py-32"
      id="skills"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center lg:items-start">
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              My
            </h2>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              Skills
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-4">
          {skills.map((project, index) => (
            <SkillCard
              key={index}
              index={index + 1}
              name={project.name}
              description={project.description}
              Icon={project.Icon}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
