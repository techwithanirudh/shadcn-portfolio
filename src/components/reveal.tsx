'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'motion/react';

interface RevealProps {
  phrases: string[];
  className?: string;
  as?: React.ElementType;
}

export function Reveal({ phrases, className = '', as = 'div' }: RevealProps) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '-10%' });

  const animation = {
    initial: { y: '100%', opacity: 0 },
    enter: (i: number) => ({
      y: '0',
      opacity: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.05 * i }
    })
  };

  const Tag = as;
  return (
    <Tag ref={body} className={className}>
      {phrases.map((phrase, index) => (
        <span
          key={index}
          className="relative mr-1 inline-flex w-fit overflow-hidden"
        >
          <motion.span
            className="inline-block"
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? 'enter' : ''}
          >
            {phrase}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
