"use client";

import { useRef } from "react";
import ParallaxImage from "@/components/fancy/parallax-image";

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="bg-background/[0.96] relative w-full overflow-hidden"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <span>A </span>
              <span>developer</span>
              <br />
              <span className="flex items-center gap-2 md:gap-4">
                <span>Who</span>
                <span
                  className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full bg-linear-to-br from-pink-200 from-40% to-pink-400 md:mx-4 md:h-[7.8rem]`}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-4xl select-none md:text-7xl">
                    ❤️
                  </span>
                </span>
                <span>to</span>
                <span>code</span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <ParallaxImage
        src="/images/hero.jpg"
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-4/2 w-screen lg:mt-28"
        priority
        parallaxOptions={{
          yStart: "-10%",
          yEnd: "10%",
          scaleStart: 1,
          scaleEnd: 1.5,
        }}
      />
    </section>
  );
}

export default Hero;
