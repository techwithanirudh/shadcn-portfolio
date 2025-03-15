"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";

interface AnimatedLetterProps {
  character: string;
  animation: Variants;
}

export const AnimatedLetter = ({
  character,
  animation,
}: AnimatedLetterProps) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap"
    >
      {character}
    </motion.span>
  );
};
