import type { Testimonial } from "@/types/testimonial";
import React from "react";
import Image from "next/image";

import { cn } from "@repo/ui";
import { Card, CardContent } from "@repo/ui/card";

interface TestimonialCardProps extends Testimonial {
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
    <Card
      className={cn(
        "h-full w-full rounded-xl",
        "bg-muted/40 hover:bg-muted gap-4 p-0",
        className,
      )}
    >
      <div className="flex items-center gap-3 p-4">
        <div className="border-border h-12 w-12 overflow-hidden rounded-md border xl:h-16 xl:w-16">
          <Image
            src={image || "/placeholder.svg"}
            alt={name || "Anonymous"}
            className="aspect-square h-auto w-full object-cover"
            height={80}
            width={80}
          />
        </div>
        <div>
          <p className="font-semibold xl:text-lg">{name || "Anonymous"}</p>
          {username && (
            <p className="lg:text-md text-sm text-gray-500">@{username}</p>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm leading-loose xl:text-lg">
          {testimonial || "No testimonial provided."}
        </p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
