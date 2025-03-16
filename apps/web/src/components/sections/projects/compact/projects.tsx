import React from "react";
import { project } from "@/app/source";
import MotionWrap from "@/components/motion-wrap";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";

import ProjectCard from "./project-card";

function Projects() {
  const projects = [...project.getPages()].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="projects">
      <div className="px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my projects where I&apos;ve turned code into
              cool, functional stuff.
            </p>
          </div>
          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem
                    key={`project_${index}`}
                    className="md:basis-1/2 lg:basis-full xl:basis-1/2"
                  >
                    <div className="h-full">
                      <ProjectCard
                        title={project.data.title}
                        href={project.url}
                        description={project.data.description}
                        tags={project.data.tags}
                        thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
