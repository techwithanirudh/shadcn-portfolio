import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/motion/text-reveal';
import { Separator } from '@/components/ui/separator';

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
    <Card
      className={cn(
        'min-h-full bg-transparent shadow-none justify-between flex flex-col ',
        className
      )}
    >
      <CardContent className="pt-6">
        <div className="flex items-baseline justify-between">
          <TextReveal as="h3" className="text-3xl font-semibold">
            {company}
          </TextReveal>
          <TextReveal as="span" className="text-sm font-medium">
            {duration}
          </TextReveal>
        </div>
        <TextReveal as="h4" className="mt-2 text-xl font-medium uppercase">
          {name}
        </TextReveal>
        <TextReveal
          as="p"
          className="mt-2 max-w-2xl text-lg font-light text-zinc-700 dark:text-zinc-400"
        > 
          {description}
        </TextReveal>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
