'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { opacity, slideUp } from './anim';

import { Teko } from 'next/font/google';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  children: React.ReactNode;
}

const teko = Teko({ weight: '400', subsets: ['latin'] });

export function Preloader({ children }: PreloaderProps) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-[999] flex h-[100dvh] w-[100dvw] cursor-wait items-center justify-center bg-background px-[60px] pb-[40px]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={cn(
              teko.className,
              'absolute z-[1] flex items-center text-[192px] text-foreground'
            )}
          >
            {children}
          </motion.p>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className={'fill-background'}
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
