'use client';
import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  HTMLMotionProps
} from 'framer-motion';

import Reveal from '@/components/reveal';
import styles from '@/components/reveal/style.module.scss';

interface RevealProps extends HTMLMotionProps<any> {
  text: string;
  delay: number;
  width?: 'fit-content' | '100%';
}

const RevealText = (props: RevealProps) => {
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
    <p className={styles.p}>
      {props.text.split(' ').map((word, index) => {
        return (
          <Reveal
            key={index}
            transition={{ duration: 0.5, delay: (props.delay || 0.25) * index }}
          >
            {word}
          </Reveal>
        );
      })}
    </p>
  );
};

export default RevealText;
