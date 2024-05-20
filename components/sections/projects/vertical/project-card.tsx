import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, GlobeIcon, InfoIcon } from 'lucide-react';

import { Project } from '@/types/project';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

interface ProjectCardProps extends Project {
  minH?: number;
  className?: string;
}

function ProjectCard({
  name,
  minH,
  description,
  thumbnail,
  slug,
  className
}: ProjectCardProps) {
  return (
    <Link href={'/project/' + slug}>
      <Card
        className={cn('flex flex-col justify-between', className)}
        style={{ minHeight: minH }}
      >
        <CardContent className="p-4 md:p-6">
          <div className="grid gap-2">
            <Image
              src={thumbnail || '/placeholder.svg'}
              alt={`Image of ${name}`}
              sizes="100vw"
              width={500}
              height={300}
              className="h-48 w-full rounded-md object-cover"
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description || ''}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end p-4 md:p-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={buttonVariants({
                    variant: 'outline',
                    className: 'ml-2 justify-self-end'
                  })}
                  href={'/project/' + slug}
                >
                  <InfoIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProjectCard;
