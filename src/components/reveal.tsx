'use client'

import { useRef } from 'react';
import { useInView, motion } from 'motion/react';

interface RevealProps {
  phrases: string[];
  className?: string;
}

export function Reveal({ phrases, className = '' }: RevealProps) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
    })
  };

  return (
    <div ref={body} className={className}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}

