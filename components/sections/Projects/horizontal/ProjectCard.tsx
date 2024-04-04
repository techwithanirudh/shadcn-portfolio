import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  link?: string;
}

function ProjectCard({
  title,
  description,
  thumbnail,
  link,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden rounded-md">
      <CardContent className="w-full p-0 inline-block overflow-hidden">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title || "Project Title"}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover hover:scale-110 duration-200 transition-transform"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:grid-cols-2 md:p-6">
        <div>
          <h3 className="text-xl font-bold">{title || "Project Title"}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description || ""}
          </p>
        </div>
        <Link
          className={`${buttonVariants({
            variant: "outline",
            className: "justify-self-end",
          })}`}
          href={link || "#"}
        >
          View
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
