"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionWrap = ({ children, className, ...props }) => {
  return (
    <motion.section
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={cn(className, "app__flex")}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrap;
