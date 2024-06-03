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
    <Card className={cn('h-full w-full rounded-xl', 'bg-muted/40', className)}>
      <div className="flex items-center p-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
          <Image
            src={image || '/placeholder.svg'}
            alt={name || 'Anonymous'}
            className="aspect-square h-auto w-full rounded-full object-cover"
            height={40}
            width={40}
          />
        </div>
        <div className="ml-4">
          <p className="font-semibold">{name || 'Anonymous'}</p>
          {username && <p className="text-sm text-gray-500">{username}</p>}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm leading-loose">
          {testimonial || 'No testimonial provided.'}
        </p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
