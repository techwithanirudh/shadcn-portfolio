import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MotionWrap from "@/components/MotionWrap";
import ProjectCard from "./ProjectCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  return (
    <MotionWrap
      className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200 dark:border-gray-700"
      id="projects"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my featured projects.
            </p>
          </div>
          <div className="lg:max-w-2xl overflow-hidden lg:px-12 flex items-center justify-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-xl md:max-w-3xl"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-full	xl:basis-1/2"
                  >
                    <div className="p-1">
                      <ProjectCard
                        thumbnail={"/laptop.jpg"}
                        title={`Project ${index + 1}`}
                        description={`A very interesting project which is ${index + 1} times better than the other one.`}
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
