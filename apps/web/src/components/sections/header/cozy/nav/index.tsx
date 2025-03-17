import { useState } from "react";
import { UserButton } from "@/components/auth/user-button";
import ModeToggle from "@/components/mode-toggle";
import { links } from "@/components/sections/header/config";
import { motion } from "motion/react";

import { height } from "../anim";
import Body from "./body/body";
import Image from "./image/image";
import styles from "./style.module.scss";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
          {/* <Footer /> */}
        </div>
        <Image
          src={links[selectedLink.index]?.thumbnail ?? ""}
          isActive={selectedLink.isActive}
        />
        <div className="absolute right-0 bottom-0 mb-auto flex items-center gap-2">
          <UserButton />
          <ModeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
