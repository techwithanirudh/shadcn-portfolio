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

interface Link {
  type: 'github' | 'live';
  url: string;
}

interface Project {
  name?: string;
  description?: string;
  thumbnail?: string;
  links?: Link[];
}

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    description: 'A personal portfolio to showcase your coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  },
  {
    name: 'Recipe Sharing App',
    description: 'A social app for food lovers where users can post, share, and discover recipes from around the world.',
    thumbnail: '/images/projects/recipe_app.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  },
  {
    name: 'Virtual Study Group Platform',
    description: 'A platform where students can form virtual study groups, schedule sessions, and share resources in real-time.',
    thumbnail: '/images/projects/study_group.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  },
  {
    name: 'Fitness Tracker App',
    description: 'A mobile app that helps users track their fitness activities, set goals, and monitor progress with motivational tools.',
    thumbnail: '/images/projects/fitness_tracker.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  },
  {
    name: 'Eco-friendly Product Marketplace',
    description: 'An e-commerce platform dedicated to eco-friendly products where users can buy, sell, and learn about sustainable living.',
    thumbnail: '/images/projects/eco_marketplace.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  },
  {
    name: 'Interactive Coding Tutorial Site',
    description: 'A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.',
    thumbnail: '/images/projects/coding_tutorials.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  }
];

function Projects() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="projects"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
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
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-full	xl:basis-1/2"
                  >
                    <div className="p-1">
                      <ProjectCard
                        name={project.name}
                        description={project.description}
                        thumbnail={project.thumbnail}
                        links={project.links}
                        
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
