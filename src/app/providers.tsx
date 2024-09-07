'use client';

import { useRef } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { ThemeProvider } from '@/components/theme-provider';

import { animate } from 'framer-motion/dom';

export default function Providers({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TransitionRouter
        auto
        leave={(next) => {
          animate(
            wrapperRef.current,
            { opacity: [1, 0] },
            { duration: 0.2, onComplete: next }
          );
        }}
        enter={(next) => {
          animate(
            wrapperRef.current,
            { opacity: [0, 1] },
            { duration: 0.2, onComplete: next }
          );
        }}
      >
        <div ref={wrapperRef}>{children}</div>
      </TransitionRouter>
    </ThemeProvider>
  );
}
