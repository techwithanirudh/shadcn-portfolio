import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

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
    <Card className="w-full md:max-w-4xl lg:max-w-xl rounded-xl">
      <div className="flex items-center p-4">
        <div className="rounded-full overflow-hidden border-2 border-white w-12 h-12">
          <Image
            alt={name || "Anonymous"}
            className="rounded-full aspect-square"
            height={48}
            width={48}
            src={image || "/placeholder.svg"}
          />
        </div>
        <div className="ml-4">
          <p className="font-semibold">{name || "Anonymous"}</p>
          <p className="text-sm text-gray-500">@{username || "username"}</p>
        </div>
      </div>
      <CardContent className="p-4 border-t">
        <p className="text-sm leading-loose">
          {testimonial || "No testimonial provided."}
        </p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
