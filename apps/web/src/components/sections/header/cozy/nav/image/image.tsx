import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { opacity } from "../../anim";
import styles from "./style.module.scss";

interface IndexProps {
  src: string;
  isActive: boolean;
}

const Index: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image
        src={`/images/nav/${src}`}
        fill={true}
        alt={"An image to describe the selected link"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        // priority={true}
      />
    </motion.div>
  );
};

export default Index;
