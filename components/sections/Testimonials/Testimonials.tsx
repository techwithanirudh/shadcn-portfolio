import React from "react";
import MotionWrap from "@/components/MotionWrap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/sections/Testimonials/TestimonialCard";

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

          <div className="flex items-center justify-center overflow-hidden lg:max-w-2xl lg:px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <TestimonialCard
                        name={`Jane Doe (${index + 1})`}
                        image="/images/person.jpg"
                        username={`janedoe${index + 1}`}
                        testimonial={`This service helps me ${index + 2} times a day! Highly recommend to anyone looking for quality.`}
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
