import type { Post } from "@/types/post";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/fancy/text-reveal";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";

import { AspectRatio } from "@repo/ui/aspect-ratio";
import { Badge } from "@repo/ui/badge";
import { Button, buttonVariants } from "@repo/ui/button";
import { Card, CardContent, CardFooter } from "@repo/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/tooltip";

interface PostCardProps extends Post {
  href: string;
  thumbnail: string;
  className?: string;
}

function PostCard({
  title,
  description,
  href,
  thumbnail,
  date,
  className,
}: PostCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col justify-between border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900",
        className,
      )}
    >
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <AspectRatio
            ratio={16 / 9}
            className="z-2 mb-2 inline-block overflow-hidden rounded-md"
          >
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={`Image of ${title}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </AspectRatio>
          <TextReveal as="h3" className="text-xl font-bold">
            {title}
          </TextReveal>
          <TextReveal
            as="p"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {description || ""}
          </TextReveal>
          <TextReveal
            as="p"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {date.toDateString()}
          </TextReveal>
          {/* <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end p-4 md:p-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="z-2 rounded-md border border-zinc-950/10 dark:border-zinc-50/10"
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
      </CardFooter>
      <Link href={href} className="absolute inset-0 z-1 block" />
    </Card>
  );
}

export default PostCard;
