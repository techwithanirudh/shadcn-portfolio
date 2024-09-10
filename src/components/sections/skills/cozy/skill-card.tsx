import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Skill } from '@/types/skill';

import { cn, trimString } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

import { MemoizedReactMarkdown } from '@/components/markdown';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { trimLen } from '@/components/sections/skills/config';
import TextReveal from '@/components/text-reveal';

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
        <AccordionItem value={`acc-${index}`} className="w-full border-none">
          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-semibold">({index})</span>

            {trimLen != -1 && (description || '').length > trimLen ? (
              <AccordionTrigger />
            ) : (
              <>{Icon ? <Icon className="h-8 w-8" /> : <CodeIcon />}</>
            )}
          </div>
          <div className="grid gap-0.5">
            <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight">
              <TextReveal>{name}</TextReveal>
            </h3>
            {trimLen != 0 && (
              <p className="mt-2 text-base text-muted-foreground">
                <TextReveal>
                  {trimLen != -1
                    ? trimString(trimLen, description || '')
                    : description}
                </TextReveal>
              </p>
            )}
          </div>

          {trimLen != -1 && (description || '').length > trimLen && (
            <AccordionContent className="text-md">
              <Separator className="my-2" />
              <MemoizedReactMarkdown
                className="prose min-w-full break-words text-muted-foreground dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                  p({ children }) {
                    return <p className="mb-2 last:mb-0">{children}</p>;
                  }
                }}
              >
                {(trimLen != 0 ? '...' : '') + description!.substring(trimLen)}
              </MemoizedReactMarkdown>
            </AccordionContent>
          )}
        </AccordionItem>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
