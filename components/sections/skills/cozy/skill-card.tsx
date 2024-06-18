import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Skill } from '@/types/skill';

import { cn } from '@/lib/utils';

interface SkillCardProps extends Skill {
  index: number;
  className?: string;
}

function SkillCard({
  name,
  description,
  Icon,
  index,
  className
}: SkillCardProps) {
  return (
    <Card className={cn('bg-muted/40', className)}>
      <CardContent className="flex flex-col items-start p-6">
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-semibold">({index})</span>
          {Icon ? <Icon className="h-8 w-8" /> : <CodeIcon />}
        </div>
        <div className="grid gap-0.5">
          <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight">
            {name}
          </h3>
          <p className="mt-2 text-base text-gray-500">{description || ''}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
