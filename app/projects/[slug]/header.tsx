'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';

import Link from 'next/link';

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

type ProjectMetadata = {
  name: string;
  description: string;
  website: string;
  github: string;
  techstack: Array<{ label: string }>;
  selected: boolean;
  slug: string;
};

type HeaderProps = {
  metadata: ProjectMetadata;
};

const Header = (props: HeaderProps) => {
  const {
    metadata: { name, description, website, github }
  } = props;

  return (
    <div className="space-y-8 pt-10">
      <motion.div
        className="flex items-center gap-3"
        initial={animation.hide}
        animate={animation.show}
      >
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-bold">{name}</div>
          <div>{description}</div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {website && (
          <Link
            href={website}
            className={cn(buttonVariants(), 'group')}
            target="_blank"
          >
            Visit Website
            <ArrowUpRightIcon className="ml-2 size-5" />
          </Link>
        )}
        {github && (
          <Link
            href={github}
            className={cn(buttonVariants(), 'group')}
            target="_blank"
          >
            Github
            <ArrowUpRightIcon className="ml-2 size-5" />
          </Link>
        )}
      </motion.div>
    </div>
  );
};
export default Header;
