'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { CodeIcon } from 'lucide-react'
import styles from './style.module.scss'
import { opacity, background } from './anim'
import Nav from './nav'

import { metadata as meta } from '@/app/config'

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className="flex items-center justify-center">
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">{meta.author.name}</span>
        </Link>
        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
          ></div>
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
    </div>
  )
}

export default Header
