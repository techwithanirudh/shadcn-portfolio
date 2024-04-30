"use client";
import React, { useEffect, useRef, useState } from "react";

import MotionWrap from "@/components/MotionWrap";
import ProjectCard from "./ProjectCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projects } from '../config';

function Projects() {
  const [tallestCH, setTallestCH] = useState(0);

  const carouselItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const height = carouselItemRefs.current.reduce((max, current) => {
      return Math.max(max, current?.offsetHeight || 0);
    }, 0);

    setTallestCH(height);
  }, []);

  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="projects"
    >
      <div className="px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my featured projects.
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
                    key={index}
                    className="md:basis-1/2 lg:basis-full	xl:basis-1/2"
                  >
                    <div
                      ref={(el) => { carouselItemRefs.current[index] = el; }}
                      key={index}
                    >
                      <ProjectCard
                        name={project.name}
                        description={project.description}
                        thumbnail={project.thumbnail}
                        links={project.links}
                        minH={tallestCH}
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
