"use client";

import type { ImageProps } from "next/image";
import type { RefObject } from "react";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@repo/ui";

interface ParallaxImageProps extends Omit<ImageProps, "ref"> {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  containerClassName?: string;
  parallaxOptions?: {
    yStart?: string;
    yEnd?: string;
    scaleStart?: number;
    scaleEnd?: number;
  };
}

const ParallaxImage = ({
  className,
  containerRef,
  containerClassName,
  parallaxOptions,
  ...props
}: ParallaxImageProps) => {
  const {
    yStart = "-10%",
    yEnd = "10%",
    scaleStart = 1,
    scaleEnd = 1.5,
  } = parallaxOptions || {};

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [yStart, yEnd]);
  const scale = useTransform(scrollYProgress, [0, 1], [scaleStart, scaleEnd]);

  return (
    <motion.div
      className={cn("relative w-full overflow-hidden", containerClassName)}
      style={{ y, scale }}
    >
      <Image className={cn("object-cover", className)} fill {...props} />
    </motion.div>
  );
};

ParallaxImage.displayName = "ParallaxImage";

export default ParallaxImage;
