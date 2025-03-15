import type { Experience } from "@/types/experience";

import { cn } from "@repo/ui";
import { Card, CardContent } from "@repo/ui/card";

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  className,
}: ExperienceCardProps) {
  return (
    <Card className={cn("border-none bg-transparent shadow-none", className)}>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold">{company}</h3>
          <span className="text-sm font-medium">{duration}</span>
        </div>
        <h4 className="mt-2 text-lg font-medium uppercase">{name}</h4>
        <p className="mt-2">{description}</p>
        <hr className="border-border my-6 border-t" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
