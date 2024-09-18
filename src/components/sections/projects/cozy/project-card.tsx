import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types/project';
import { GithubIcon, GlobeIcon, InfoIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import TextReveal from '@/components/text-reveal';

interface ProjectCardProps extends Project {
  href: string;
  thumbnail: string;
  className?: string;
}

function ProjectCard({
  title,
  description,
  thumbnail,
  tags,
  href,
  className
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40',
        className
      )}
    >
      <CardContent className="z-[2] inline-block w-full overflow-hidden p-0">
        <Image
          src={thumbnail || '/placeholder.svg'}
          alt={`Image of ${title}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-96 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6">
        <div>
          <h3 className="text-xl font-bold">
            <TextReveal>{title}</TextReveal>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <TextReveal>{description || ''}</TextReveal>
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                  asChild
                >
                  <Link href={href}>
                    <InfoIcon />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
      <Link href={href} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default ProjectCard;
