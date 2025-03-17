"use client";

import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { testimonials } from "@/components/sections/testimonials/config";
import Autoplay from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@repo/ui/carousel";

import TestimonialCard from "./testimonial-card";

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

function Testimonials() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="testimonials">
      <div className="grid gap-10">
        <div className="flex w-full flex-col items-center justify-center px-4 text-center md:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              My Testimonials
            </TextReveal>
          </div>
          <p className="mt-4 hidden text-gray-500 lg:mt-0 lg:block lg:w-[35%] dark:text-gray-400">
            Here are some of my testimonials where clients and colleagues share
            their experiences of working with me.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              loop: true,
            }}
            plugins={[
              Autoplay({
                speed: 600 / 1000,
                startDelay: 100,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {firstRow.map((testimonial, index) => (
                <CarouselItem
                  key={`testimonial_${index}`}
                  className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <div className="h-full p-1">
                    <TestimonialCard
                      name={testimonial.name}
                      image={testimonial.image}
                      username={testimonial.username}
                      testimonial={testimonial.testimonial}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              loop: true,
            }}
            plugins={[
              Autoplay({
                speed: 600 / 1000,
                direction: "backward",
                startDelay: 100,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {secondRow.map((testimonial, index) => (
                <CarouselItem
                  key={`testimonial-reverse_${index}`}
                  className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <div className="h-full p-1">
                    <TestimonialCard
                      name={testimonial.name}
                      image={testimonial.image}
                      username={testimonial.username}
                      testimonial={testimonial.testimonial}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="md:dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 md:bg-linear-to-r md:from-white"></div>
          <div className="md:dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 md:bg-linear-to-l md:from-white"></div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Testimonials;
