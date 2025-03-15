"use client";

import { useEffect, useState } from "react";
import AnimatedPathText from "@/components/fancy/text/text-along-path";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "motion/react";
import { TransitionRouter } from "next-transition-router";

/**
 * Loader component that displays animated circular text.
 **/

function Loader() {
  const circlePath =
    "M 100 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0";

  return (
    <div className="relative z-100 flex h-dvh w-dvw items-center justify-center">
      {[0, 90, 180, 270].map((rotation, i) => (
        <AnimatedPathText
          key={rotation}
          path={circlePath}
          pathId={`circle-path-${i}`}
          svgClassName={cn(
            "absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2",
            {
              "rotate-0": rotation === 0,
              "rotate-90": rotation === 90,
              "rotate-180": rotation === 180,
              "-rotate-90": rotation === 270,
            },
          )}
          easingFunction={{
            calcMode: "spline",
            keyTimes: "0;1",
            keySplines: "0.762 0.002 0.253 0.999",
          }}
          viewBox="0 0 200 200"
          text="loading"
          textClassName="text-[15px]"
          duration={2.5}
          textAnchor="start"
        />
      ))}
    </div>
  );
}

/**
 * TransitionProvider integrates page transitions with the custom Loader.
 */
export function TransitionProvider({
  children,
  speed = 1.0,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const baseDuration = 0.5 / speed;
  // total transition time across all states (ms)
  const transitionTiming = baseDuration * 1000 * 3;

  // Disable scrolling during transitions.
  useEffect(() => {
    document.body.style.overflow = isTransitioning ? "hidden" : "";
  }, [isTransitioning]);

  return (
    <TransitionRouter
      auto
      leave={(next, from, to) => {
        console.log({ from, to });
        setIsTransitioning(true);
        // Start exit transition then call next after 60% of transitionTiming.
        setTimeout(next, transitionTiming * 0.6);
        return () => setIsTransitioning(false);
      }}
      enter={(next) => {
        // Finish the transition after the full duration.
        setTimeout(() => {
          setIsTransitioning(false);
          next();
        }, transitionTiming);
        return () => {};
      }}
    >
      <div>{children}</div>
      <AnimatePresence>{isTransitioning && <Loader />}</AnimatePresence>
    </TransitionRouter>
  );
}
