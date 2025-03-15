"use client";

import type { MotionProps } from "motion/react";
import type { ReactNode } from "react";
import React from "react";
import { motion } from "motion/react";

import { cn } from "@repo/ui";

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
