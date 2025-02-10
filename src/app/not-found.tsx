'use client';
import React from 'react';
import Screensaver from '@/components/motion/screensaver';
import { exampleImages } from '@/lib/example-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const NotFoundPage: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#efefef]"
      ref={containerRef}
    >
      <div className="z-30 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl md:text-6xl">page not found</h1>
        <div className="w-full rounded-full bg-[#efefef]">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'w-full self-center rounded-full px-8 py-2 md:self-start'
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
          <div className="h-20 w-20 overflow-hidden md:h-48 md:w-48">
            <img
              src={image}
              alt={`Example ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        </Screensaver>
      ))}
    </div>
  );
};

export default NotFoundPage;
