"use client";

import type { LinkProps } from "next/link";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { letterAnimation, letterAnimationTwo } from "./anim";
import { AnimatedWord } from "./word";

type AnimatedLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode | undefined;
  } & React.RefAttributes<HTMLAnchorElement> & {
    external?: boolean;
  };

export default function AnimatedLink({
  href,
  children,
  target,
  external,
  ...props
}: AnimatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const processChildren = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === "string") {
      return child.split(" ").map((word, index, array) => (
        <React.Fragment key={`word-${index}`}>
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-pointer overflow-hidden"
          >
            <AnimatedWord
              title={word}
              animation={letterAnimation}
              isHovered={isHovered}
            />
            <div className="absolute top-0">
              <AnimatedWord
                title={word}
                animation={letterAnimationTwo}
                isHovered={isHovered}
              />
            </div>
          </motion.div>
          {index < array.length - 1 && (
            <span key={`space-${index}`}>&nbsp;</span>
          )}
        </React.Fragment>
      ));
    } else if (React.isValidElement(child)) {
      const element = child as React.ReactElement & {
        props?: {
          children?: React.ReactNode;
        };
      };

      if (element.props && "children" in element.props) {
        return React.cloneElement(
          element,
          {},
          processChildren(element.props.children),
        );
      }
      return element;
    } else if (Array.isArray(child)) {
      return child.map((nestedChild: React.ReactNode, index) => (
        <React.Fragment key={`nested-${index}`}>
          {processChildren(nestedChild)}
        </React.Fragment>
      ));
    }
    return child;
  };

  return external ? (
    <a
      href={typeof href === "object" ? (href as URL).toString() : String(href)}
      target={target ?? "_blank"}
      rel="noopener noreferrer"
      {...props}
    >
      {processChildren(children)}
    </a>
  ) : (
    <Link href={href} {...props}>
      {processChildren(children)}
    </Link>
  );
}
