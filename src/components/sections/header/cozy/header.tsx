'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MotionLink from '@/components/motion/link';
import { CodeIcon } from 'lucide-react';
import styles from './style.module.scss';
import { opacity, background } from './anim';
import Nav from './nav';

import { metadata as meta } from '@/app/config';

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.header
      className={styles.header}
      initial={{
        y: -80
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8
      }}
    >
      <div className={styles.bar}>
        <MotionLink href="/" className="inline-flex items-center justify-center text-md font-semibold">
          {meta.author.name}
        </MotionLink>
        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? 'open' : 'closed'}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>
              Close
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
          ></div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
