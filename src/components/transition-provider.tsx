'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionRouter } from 'next-transition-router';
import { cn } from '@/lib/utils';

const TransitionLayer = ({
  className,
  custom
}: {
  className: string;
  custom: number;
}) => (
  <motion.div
    className={cn('fixed inset-0 z-50', className)}
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '-100%' }}
    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
    custom={custom}
  />
);

export function TransitionProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTiming = 750;

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
        setTimeout(next, transitionTiming);
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
            <TransitionLayer className="bg-primary" custom={1} />
            <TransitionLayer className="bg-foreground" custom={2} />
          </>
        )}
      </AnimatePresence>
    </TransitionRouter>
  );
}
