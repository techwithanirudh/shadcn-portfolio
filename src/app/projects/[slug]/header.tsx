'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ArrowUpRightIcon } from 'lucide-react';

import Link from 'next/link';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const animation = {
  hide: {
    x: -30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
};

type HeaderProps = {
  metadata: Project;
};

const Header = (props: HeaderProps) => {
  const {
    metadata: { title, description, website, github, tags, date }
  } = props;

  return (
    <div className="space-y-8 pt-10">
      <motion.div
        className="flex items-center gap-3"
        initial={animation.hide}
        animate={animation.show}
      >
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-bold">{title}</div>
          <div>{description}</div>
          {date && (
            <p className="font-medium">{new Date(date).toDateString()}</p>
          )}
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {website && (
          <a
            href={website}
            className={cn(buttonVariants(), 'group')}
            target="_blank"
          >
            Visit Website
            <ArrowUpRightIcon className="ml-2 size-5" />
          </a>
        )}
        {github && (
          <a
            href={github}
            className={cn(buttonVariants(), 'group')}
            target="_blank"
          >
            Github
            <ArrowUpRightIcon className="ml-2 size-5" />
          </a>
        )}
      </motion.div>
      <motion.div
        className="mt-2 flex flex-wrap gap-2"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {tags?.map((tag, index) => (
          <Badge
            key={`project-tag_${index}`}
            variant={'secondary'}
            className="px-3 py-1 text-sm"
          >
            {tag.label}
          </Badge>
        ))}
      </motion.div>
    </div>
  );
};
export default Header;
