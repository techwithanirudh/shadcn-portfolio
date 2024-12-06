'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TransitionRouter } from 'next-transition-router';
import { cn } from '@/lib/utils';

const TransitionLayer = ({
  className,
  custom,
  duration,
  delay = 0
}: {
  className: string;
  custom: number;
  duration: number;
  delay?: number;
}) => (
  <motion.div
    className={cn('fixed inset-0 z-30', className)}
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '-100%' }}
    transition={{
      duration: duration,
      ease: [0.65, 0, 0.35, 1],
      delay: delay
    }}
    custom={custom}
  />
);

export function TransitionProvider({
  children,
  speed = 1.0
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const baseDuration = 0.5 / speed;
  const transitionTiming = baseDuration * 1000 * 3;

  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isTransitioning]);

  return (
    <TransitionRouter
      auto
      leave={(next, from, to) => {
        console.log({ from, to });
        setIsTransitioning(true);
        setTimeout(next, transitionTiming * 0.6);
        return () => setIsTransitioning(false);
      }}
      enter={(next) => {
        setTimeout(() => {
          setIsTransitioning(false);
          next();
        }, transitionTiming);
        return () => {};
      }}
    >
      <div>{children}</div>
      <AnimatePresence>
        {isTransitioning && (
          <>
            <TransitionLayer
              className="bg-black"
              custom={1}
              duration={baseDuration * 0.6}
            />
            <TransitionLayer
              className="bg-orange-300"
              custom={2}
              duration={baseDuration * 0.8}
              delay={baseDuration * 0.4}
            />
            <TransitionLayer
              className="bg-black"
              custom={3}
              duration={baseDuration}
              delay={baseDuration * 0.8}
            />
          </>
        )}
      </AnimatePresence>
    </TransitionRouter>
  );
}
