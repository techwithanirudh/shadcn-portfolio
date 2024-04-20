import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import { GithubIcon, GlobeIcon } from "lucide-react";

import { Project } from "@/types";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

interface ProjectCardProps extends Project {
  minH?: number;
  className?: string;
}

function ProjectCard({
  name,
  minH,
  description,
  thumbnail,
  links,
  className
}: ProjectCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between", className)} style={{minHeight: minH}}>
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={name || "Project Image"}
            sizes="100vw"
            width={500}
            height={300}
            className="h-48 w-full rounded-md object-cover"
          />
          <h3 className="text-xl font-bold">{name || "Unnamed Project"}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description || ""}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end p-4 md:p-6">
        <TooltipProvider>
          {links &&
            links.map((link, index) => {
              let Icon;
              switch (link.type) {
                case "github":
                  Icon = GithubIcon;
                  break;
                case "live":
                  Icon = GlobeIcon;
                  break;
                default:
                  Icon = null;
              }

              return Icon ? (
                <Tooltip 
                  key={index}
                >
                  <TooltipTrigger asChild>
                    <a
                      className={buttonVariants({
                        variant: "outline",
                        className: "ml-2",
                      })}
                      href={link.url}
                      target="_blank"
                    >
                      <Icon />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.type === "github" ? "GitHub" : "External"} Link</p> 
                  </TooltipContent>
                </Tooltip>
              ) : null;
            })}
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
