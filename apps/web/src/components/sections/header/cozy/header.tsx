"use client";

import { useState } from "react";
import { metadata as meta } from "@/app/config";
import MotionLink from "@/components/fancy/link";
import { AnimatePresence, motion } from "motion/react";

import { background, opacity } from "./anim";
import Nav from "./nav";
import styles from "./style.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.header
      className={styles.header}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className={styles.bar}>
        <MotionLink
          href="/"
          className="text-md inline-flex items-center justify-center font-semibold"
        >
          {meta.author.name}
        </MotionLink>
        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
          ></div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
