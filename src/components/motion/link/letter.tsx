'use client';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedLetterProps {
  character: string;
  animation: Variants;
}

export const AnimatedLetter = ({
  character,
  animation
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
