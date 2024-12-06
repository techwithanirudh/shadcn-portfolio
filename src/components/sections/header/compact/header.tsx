'use client';
import React, { useState, useEffect } from 'react';
import Link from '@/components/motion/link';
import { motion } from 'motion/react';
import { CodeIcon, EllipsisIcon, MenuIcon, XIcon } from 'lucide-react';
import ThemeToggle from '@/components/mode-toggle';
import { linkLimit, links } from '@/components/sections/header/config';

import { metadata as meta } from '@/app/config';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
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
    <motion.header
      className="fixed z-20 w-full bg-background/80 backdrop-blur-lg"
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
            <nav className="flex items-center gap-4">
              <div className="flex items-center gap-4 lg:gap-6">
                {links.slice(0, linkLimit).map(({ title, href }, index) => (
                  <Link
                    className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
                    href={href}
                    key={`header-desktop-link_${index}`}
                  >
                    {title}
                  </Link>
                ))}

                {links.length > linkLimit && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="m-0 h-8 w-8"
                      >
                        <EllipsisIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {links.slice(linkLimit).map(({ title, href }, index) => (
                        <DropdownMenuItem
                          key={`header-extra-link_${index}`}
                          asChild
                        >
                          <Link href={href}>{title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
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
              key={`header-mobile-link_${index}`}
            >
              {title}
            </Link>
          ))}
          <div className="flex w-full items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
