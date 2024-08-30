'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  HTMLMotionProps
} from 'framer-motion';
import { Button } from '@/components/ui/button';

interface RevealProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <span
      ref={ref}
      style={{
        position: 'relative',
        display: 'inline-flex', // inline-flex gives opacity cool
        // verticalAlign: 'top',
        width: width,
        overflow: 'hidden'
      }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        {...props}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default Reveal;
