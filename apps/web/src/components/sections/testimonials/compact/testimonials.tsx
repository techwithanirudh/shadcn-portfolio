import React from "react";
import MotionWrap from "@/components/motion-wrap";
import { testimonials } from "@/components/sections/testimonials/config";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";

import TestimonialCard from "./testimonial-card";

function Testimonials() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="testimonials">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              My Testimonials
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my testimonials where clients and colleagues
              share their experiences of working with me.
              <br />
              <b>
                Note: The images used in this carousel are sourced from
                Unsplash.
              </b>
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={`testimonial_${index}`}>
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Testimonials;
