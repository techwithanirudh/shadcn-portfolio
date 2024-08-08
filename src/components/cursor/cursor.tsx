'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './style.module.scss';
import {
  motion,
  useMotionValue,
  useSpring,
  MotionValue,
  SpringOptions,
  AnimationControls
} from 'framer-motion';

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
  const cursorSize = isPressed ? 18 : 12;
  const [isVisible, setIsVisible] = useState(false);

  const mouse: { x: MotionValue<number>; y: MotionValue<number> } = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions: SpringOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageResize = () => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) {
      setIsVisible(false);
      return;
    }
  };

  const manageMouseMove = (e: MouseMoveEvent) => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) {
      setIsVisible(false);
      return;
    }
    if (!isVisible) setIsVisible(true);

    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseDown = (e: MouseEvent) => {
    // prevent right click to trigger pressed
    if (e.button === 2) return;

    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    window.addEventListener('resize', manageResize);

    document.body.addEventListener('mouseleave', manageMouseLeave, {
      passive: true
    });
    window.addEventListener('mousemove', manageMouseMove, {
      passive: true
    });
    window.addEventListener('mousedown', handleMouseDown, {
      passive: true
    });
    window.addEventListener('mouseup', handleMouseUp, {
      passive: true
    });

    return () => {
      window.removeEventListener('resize', manageResize);

      window.removeEventListener('mouseleave', manageMouseLeave);
      window.removeEventListener('mousemove', manageMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const template = ({
    rotate,
    scaleX,
    scaleY
  }: {
    rotate: number;
    scaleX: number;
    scaleY: number;
  }) => {
    return `rotate(${rotate}deg) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div className={styles.cursorContainer}>
      {/* TODO: Instead of setting a high x & y, use hidden and show the cursor when moved */}
      {/* TODO: Hide the whole cursor and make this the way to use the cursor */}
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: mouse.x,
          scaleY: mouse.y
        }}
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        className={`${styles.cursor} ${isVisible ? styles.visible : styles.hidden}`}
        ref={cursor}
      ></motion.div>
    </div>
  );
}
