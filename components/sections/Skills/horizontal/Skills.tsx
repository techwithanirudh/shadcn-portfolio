import React from "react";
import Reveal from "@/components/Reveal";

import { skills } from "../config";

function Projects() {
  return (
    <div
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="projects"
    >
      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
                Projects
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 lg:mt-0 lg:block lg:w-[35%] dark:text-gray-400">
            Here are some of my projects where I&apos;ve turned code into cool,
            functional stuff.
          </p>
        </div>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {/* {skills.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              thumbnail={project.thumbnail}
              links={project.links}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
