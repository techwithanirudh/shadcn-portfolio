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
    <Card>
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title || "Project Title"}
            sizes="100vw"
            width={500}
            height={300}
            className="h-48 w-full rounded-md object-cover"
          />
          <h3 className="text-xl font-bold">{title || "Project Title"}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description || ""}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center p-4 md:p-6">
        <Link
          className={buttonVariants({
            variant: "outline",
            className: "ml-auto",
          })}
          href={link || "#"}
        >
          View
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
