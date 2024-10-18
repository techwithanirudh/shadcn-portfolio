import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

function TestimonialCard({
  image,
  name,
  username,
  testimonial,
  className
}: TestimonialCardProps) {
  return (
    <Card className={cn('h-full w-full rounded-xl', 'bg-muted/40 hover:bg-muted', className)}>
      <div className="flex items-center p-4 gap-3">
        <div className="h-12 w-12 xl:h-16 xl:w-16 overflow-hidden rounded-md border border-border">
          <Image
            src={image || '/placeholder.svg'}
            alt={name || 'Anonymous'}
            className="aspect-square h-auto w-full object-cover"
            height={80}
            width={80}
          />
        </div>
        <div>
          <p className="font-semibold xl:text-lg">{name || 'Anonymous'}</p>
          {username && <p className="text-sm lg:text-md text-gray-500">@{username}</p>}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm leading-loose xl:text-lg">
          {testimonial || 'No testimonial provided.'}
        </p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
