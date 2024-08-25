'use client';
import React from 'react';
import { HTMLMotionProps } from 'framer-motion';

import Reveal from '@/components/reveal';

interface RevealTextProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

const RevealText = ({
  children,
  className,
  delay = 0.25,
  width
}: RevealTextProps) => {
  const words = React.Children.toArray(children);

  return (
    <span className={className}>
      {/* todo: fix index as index is 0 no delay is added */}
      {words.map((word, index) => (
        <Reveal
          key={index}
          transition={{ duration: 0.5, delay: delay * index }}
          width={width}
        >
          {word}{' '}
        </Reveal>
      ))}
    </span>
  );
};

export default RevealText;
