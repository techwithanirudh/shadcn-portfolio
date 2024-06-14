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

interface ProjectCardProps extends Project {
  className?: string;
}

function ProjectCard({
  name,
  description,
  thumbnail,
  slug,
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
          alt={`Image of ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-96 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description || ''}
          </p>
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
                  <Link href={'/projects/' + slug}>
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
      <Link href={'/projects/' + slug} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default ProjectCard;
