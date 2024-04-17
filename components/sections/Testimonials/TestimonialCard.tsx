import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialCardProps {
  image?: string;
  name?: string;
  username?: string;
  testimonial?: string;
}

function TestimonialCard({
  image,
  name,
  username,
  testimonial,
}: TestimonialCardProps) {
  return (
    <Card className="w-full rounded-xl">
      <div className="flex items-center p-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
          <Image
            alt={name || "Anonymous"}
            className="aspect-square rounded-full w-full h-auto object-cover"
            height={40}
            width={40}
            src={image || "/placeholder.svg"}
          />
        </div>
        <div className="ml-4">
          <p className="font-semibold">{name || "Anonymous"}</p>
          <p className="text-sm text-gray-500">@{username || "username"}</p>
        </div>
      </div>
      <CardContent className="border-t border-gray-200 p-4 dark:border-gray-700">
        <p className="text-sm leading-loose">
          {testimonial || "No testimonial provided."}
        </p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
