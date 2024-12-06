import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/motion/text-reveal';

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  className
}: ExperienceCardProps) {
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-3xl font-semibold">
            <TextReveal>{company}</TextReveal>
          </h3>
          <span className="text-sm font-medium">
            <TextReveal>{duration}</TextReveal>
          </span>
        </div>
        <h4 className="mt-2 text-xl font-medium uppercase">
          <TextReveal>{name}</TextReveal>
        </h4>
        <p className="mt-2 max-w-2xl text-lg font-light text-zinc-700 dark:text-zinc-400">
          <TextReveal>{description}</TextReveal>
        </p>
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
