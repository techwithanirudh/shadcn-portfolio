import type { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/fancy/text-reveal";

import { cn } from "@repo/ui";
import { AspectRatio } from "@repo/ui/aspect-ratio";
import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardFooter } from "@repo/ui/card";
import { Icons } from "@repo/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/tooltip";

interface ProjectCardProps extends Project {
  href: string;
  thumbnail: string;
  className?: string;
}

// todo: update padding and spacing for all componetns as we upgraded to new york shadcn
function ProjectCard({
  title,
  description,
  href,
  thumbnail,
  tags,
  className,
}: ProjectCardProps) {
  // todo: decide either to keep the white as the bg or use a muted color instead like prev versions
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col justify-between border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900",
        className,
      )}
    >
      <CardContent>
        <div className="grid gap-2">
          <AspectRatio
            ratio={16 / 9}
            className="z-2 mb-2 inline-block overflow-hidden rounded-md"
          >
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={`Image of ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </AspectRatio>
          <TextReveal className="text-xl font-bold" as="h3">
            {title}
          </TextReveal>
          <TextReveal
            as="p"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {description ?? ""}
          </TextReveal>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="z-2 rounded-md border border-zinc-950/10 dark:border-zinc-50/10"
                asChild
              >
                <Link href={href}>
                  <Icons.info />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
      <Link href={href} className="absolute inset-0 z-1 block" />
    </Card>
  );
}

export default ProjectCard;
