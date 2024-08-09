'use client';
import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  HTMLMotionProps
} from 'framer-motion';

interface RevealProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

const Reveal = (props: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView]);

  return (
    <span
      ref={ref}
      style={{
        display: 'inline-flex',
        position: 'relative',
        width: props.width,
        overflow: 'hidden'
      }}
    >
      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: 100
            // transition: { duration: 0.5 }
          },
          visible: {
            opacity: 1,
            y: 0
            // transition: { duration: 0.5, delay: 0.01 }
          }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        {...props}
      >
        {props.children}
      </motion.span>
      {/* TODO: Add slide div thingy */}
    </span>
  );
};

export default Reveal;
