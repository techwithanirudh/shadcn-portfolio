'use client';
import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

type MotionWrapProps = {
  children: ReactNode;
  className?: string;
  id?: string;
} & MotionProps;

const MotionWrap: React.FC<MotionWrapProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.section className={cn(className)} {...props}>
      {children}
    </motion.section>
  );
};

export default MotionWrap;
