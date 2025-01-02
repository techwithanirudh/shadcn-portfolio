'use client';
import React from "react";
import Screensaver from "@/components/motion/screensaver";
import { exampleImages } from "@/lib/example-images";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const NotFoundPage: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="min-h-[100dvh] bg-[#efefef] overflow-hidden flex items-center justify-center relative"
      ref={containerRef}
    >
      <div className="z-30 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl md:text-6xl">
          page not found
        </h1>
        <div className="bg-[#efefef] w-full rounded-full">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'self-center rounded-full px-8 py-2 md:self-start w-full'
            )}
          >
            Home
          </Link>
        </div>
      </div>
      {[...exampleImages, ...exampleImages].map((image, index) => (
        <Screensaver
          key={index}
          speed={1}
          startPosition={{ x: index * 3, y: index * 3 }}
          startAngle={40}
          containerRef={containerRef}
        >
          <div className="w-20 h-20 md:w-48 md:h-48 overflow-hidden">
            <img
              src={image}
              alt={`Example ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </Screensaver>
      ))}
    </div>
  );
};

export default NotFoundPage;
