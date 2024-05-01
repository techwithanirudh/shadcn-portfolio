"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "/images/nav/home.jpg",
  },
  {
    title: "Projects",
    href: "#projects",
    src: "/images/nav/projects.jpg",
  },
  {
    title: "About",
    href: "#about",
    src: "/images/nav/about.jpg",
  },
  {
    title: "Skills",
    href: "#skills",
    src: "/images/nav/skills.jpg",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
    src: "/images/nav/testimonials.jpg",
  },
  {
    title: "Blog",
    href: "https://blog.example.com",
    src: "/images/nav/blog.jpg",
  },
  {
    title: "Contact",
    href: "#contact",
    src: "/images/nav/contact.jpg",
  },
];

export default function Index({ setIsActive }) {
  const [selectedLink, setSelectedLink] = useState({
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
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
