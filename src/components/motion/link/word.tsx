'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { AnimatedLetter } from './letter';
import { titleAnimation } from './anim';

interface AnimatedWordProps {
  title: string;
  animation: Variants;
  isHovered: boolean;
}

export const AnimatedWord: React.FC<AnimatedWordProps> = ({
  title,
  animation,
  isHovered
}) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? 'hover' : 'rest'}
      className="relative whitespace-nowrap"
    >
      {title
        .split('')
        .map((character, i) =>
          character === ' ' ? (
            <span key={`space-${i}`}>&nbsp;</span>
          ) : (
            <AnimatedLetter
              key={`char-${i}`}
              character={character}
              animation={animation}
            />
          )
        )}
    </motion.span>
  );
};
