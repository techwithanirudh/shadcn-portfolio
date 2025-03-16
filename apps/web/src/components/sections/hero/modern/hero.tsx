"use client";

import { useRef } from "react";
import ParallaxImage from "@/components/fancy/parallax-image";

// const heroContent = [
//   { role: "developer", action: "code", emoji: "❤️", bgColor: "bg-green-100" },
//   { role: "gamer", action: "win", emoji: "🎮", bgColor: "bg-blue-100" },
//   { role: "thinker", action: "solve", emoji: "❤️", bgColor: "bg-yellow-100" },
//   { role: "learner", action: "grow", emoji: "❤️", bgColor: "bg-purple-100" },
//   { role: "teammate", action: "collab", emoji: "❤️", bgColor: "bg-orange-100" },
//   { role: "fixer", action: "repair", emoji: "❤️", bgColor: "bg-gray-100" },
// ];

// const textLoopVariants = {
//   initial: { y: 20, rotateX: 90, opacity: 0, filter: "blur(4px)" },
//   animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
//   exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" },
// };

// const textLoopTransition = {
//   type: "spring",
//   stiffness: 900,
//   damping: 80,
//   mass: 10,
// };

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
                <span>loves</span>
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
