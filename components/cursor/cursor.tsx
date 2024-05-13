'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring, MotionValue, SpringOptions, AnimationControls } from 'framer-motion';

interface MouseMoveEvent {
  clientX: number;
  clientY: number;
}

interface Distance {
  x: number;
  y: number;
}

export default function Cursor() {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorSize = isPressed ? 25 : 15;

  const mouse: { x: MotionValue<number>; y: MotionValue<number> } = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions: SpringOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageMouseMove = (e: MouseMoveEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  // Adding and removing event listeners based on component lifecycle
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const template = ({ rotate, scaleX, scaleY }: { rotate: number; scaleX: number; scaleY: number }) => {
    return `rotate(${rotate}deg) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div className={styles.cursorContainer}>
      <motion.div 
        transformTemplate={template}
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y,
          scaleX: mouse.x,
          scaleY: mouse.y,
        }} 
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        className={styles.cursor}
        ref={cursor}
      >
      </motion.div>
    </div>
  );
}
