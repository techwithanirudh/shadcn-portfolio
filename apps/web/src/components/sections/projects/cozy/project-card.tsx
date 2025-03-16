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

function ProjectCard({
  title,
  description,
  thumbnail,
  tags,
  href,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-md border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900",
        className,
      )}
    >
      <CardContent className="w-full p-0">
        <AspectRatio
          ratio={16 / 9}
          className="z-2 inline-block overflow-hidden"
        >
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={`Image of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </AspectRatio>
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4">
        <div>
          <TextReveal as="h3" className="text-xl font-bold">
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
        <div className="flex items-center justify-end">
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
        </div>
      </CardFooter>
      <Link href={href} className="absolute inset-0 z-1 block" />
    </Card>
  );
}

export default ProjectCard;
