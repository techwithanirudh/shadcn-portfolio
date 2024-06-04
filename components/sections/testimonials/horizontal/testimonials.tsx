import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import TestimonialCard from './testimonial-card';

import Reveal from '@/components/reveal';

import { testimonials } from '@/components/sections/testimonials/config';

function Testimonials() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="testimonials">
      {/* TODO: Redesign for horizontal */}
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Reveal>
                <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  My
                </h2>
              </Reveal>
              <Reveal>
                <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  Testimonials
                </h2>
              </Reveal>
            </div>
            <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
              Here are some of my testimonials where clients and colleagues
              share their experiences of working with me.
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel
              opts={{
                align: 'start'
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
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
