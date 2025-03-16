import React from "react";
import Image from "next/image";

import { cn } from "@repo/ui";
import { Card, CardContent, CardHeader } from "@repo/ui/card";

interface TestimonialCardProps {
  image?: string;
  name?: string;
  username?: string;
  testimonial?: string;
  className?: string;
}

function TestimonialCard({
  image,
  name,
  username,
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("w-full rounded-xl", "bg-muted/40", className)}>
      <CardHeader className="flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
          <Image
            src={image || "/placeholder.svg"}
            alt={name || "Anonymous"}
            className="aspect-square h-auto w-full rounded-full object-cover"
            height={40}
            width={40}
          />
        </div>
        <div>
          <p className="font-semibold">{name || "Anonymous"}</p>
          {username && <p className="text-sm text-gray-500">{username}</p>}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm leading-loose">
          {testimonial || "No testimonial provided."}
        </p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
