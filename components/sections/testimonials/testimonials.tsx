import React from "react";
import MotionWrap from "@/components/motion-wrap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/sections/testimonials/testimonial-card";

interface Testimonial {
  image?: string;
  name?: string;
  username?: string;
  testimonial?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    image: '/images/person/1.jpg',
    username: 'johndoe',
    testimonial: 'Absolutely fantastic! This service is a lifesaver.'
  },
  {
    name: 'Emily Smith',
    image: '/images/person/2.jpg',
    username: 'emilysmith',
    testimonial: 'Very helpful and easy to use. Great customer service too.'
  },
  {
    name: 'Michael Johnson',
    image: '/images/person/3.jpg',
    username: 'michaeljohnson',
    testimonial: 'Absolutely love this service! It has streamlined my workflow like nothing else.'
  },
];

function Testimonials() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="testimonials"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              My Testimonials
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my testimonials.
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
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
