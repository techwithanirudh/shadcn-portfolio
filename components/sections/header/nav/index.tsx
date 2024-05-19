import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { height } from '../anim';
import Body from './body/body';
import Footer from './footer/footer';
import Image from './image/image';
import ModeToggle from '@/components/mode-toggle';

interface Link {
  title: string;
  href: string;
  src: string;
}

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    src: 'home.jpg'
  },
  {
    title: 'About',
    href: '#about',
    src: 'about.jpg'
  },
  {
    title: 'Projects',
    href: '#projects',
    src: 'projects.jpg'
  },
  {
    title: 'Skills',
    href: '#skills',
    src: 'skills.jpg'
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
    src: 'testimonials.jpg'
  },
  {
    title: 'Blog',
    href: 'https://blog.example.com',
    src: 'blog.jpg'
  },
  {
    title: 'Contact',
    href: '#contact',
    src: 'contact.jpg'
  }
];

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
    index: 0
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
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
        <div className="absolute bottom-0 right-0 mb-auto">
          <ModeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
