'use client';
import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  HTMLMotionProps
} from 'framer-motion';

import Reveal from '@/components/reveal';
import styles from './style.module.scss';

interface RevealTextProps extends HTMLMotionProps<any> {
  text: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

const RevealText = (props: RevealTextProps) => {
  return (
    <p className={styles.p}>
      {props.text.split(' ').map((word, index) => {
        return (
          <Reveal
            key={index}
            transition={{ duration: 0.5, delay: 0.25 * index }}
            width={props.width}
          >
            {word}
          </Reveal>
        );
      })}
    </p>
  );
};

export default RevealText;
