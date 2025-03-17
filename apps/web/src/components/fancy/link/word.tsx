"use client";

import type { Variants } from "motion/react";
import React from "react";
import { motion } from "motion/react";

import { titleAnimation } from "./anim";
import { AnimatedLetter } from "./letter";

interface AnimatedWordProps {
  title: string;
  animation: Variants;
  isHovered: boolean;
}

export const AnimatedWord: React.FC<AnimatedWordProps> = ({
  title,
  animation,
  isHovered,
}) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="relative whitespace-nowrap"
    >
      {title
        .split("")
        .map((character, i) =>
          character === " " ? (
            <span key={`space-${i}`}>&nbsp;</span>
          ) : (
            <AnimatedLetter
              key={`char-${i}`}
              character={character}
              animation={animation}
            />
          ),
        )}
    </motion.span>
  );
};
