'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CodeIcon, MenuIcon, XIcon } from 'lucide-react';
import ThemeToggle from '@/components/mode-toggle';
import { links } from '@/components/sections/header/config';

import { metadata as meta } from '@/app/config';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.5, ease: 'easeInOut' },
        opacity: { duration: 1, ease: 'easeInOut' }
      }
    },
    initial: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.5, ease: 'easeInOut' },
        opacity: { duration: 0.25, ease: 'easeInOut' }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.5, ease: 'easeInOut' },
        opacity: { duration: 0.25, ease: 'easeInOut' }
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-background/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex w-full justify-between">
          <Link href="/" className="flex items-center justify-center">
            <span className="text-md font-semibold transition-transform hover:translate-x-1 hover:translate-y-1">
              {meta.author.name}
            </span>
          </Link>

          <button className="md:hidden" onClick={toggleMenu}>
            <span className="sr-only">{isOpen ? 'Close' : 'Menu'}</span>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <div className="hidden md:flex md:w-auto md:items-center">
            <nav className="flex gap-4 lg:gap-6">
              {/* todo: add more menu if a certian length is exceeded */}
              {links.map(({ title, href }, index) => (
                <Link
                  className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
                  href={href}
                  key={index}
                >
                  {title}
                </Link>
              ))}
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="bg-transparent md:hidden"
      >
        <div className="flex flex-col gap-4 p-4">
          {links.map(({ title, href }, index) => (
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href={href}
              onClick={toggleMenu}
              key={index}
            >
              {title}
            </Link>
          ))}
          <div className="flex w-full items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
