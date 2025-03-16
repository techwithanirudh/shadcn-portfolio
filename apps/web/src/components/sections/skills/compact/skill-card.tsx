import type { Skill } from "@/types/skill";
import React from "react";

import { cn } from "@repo/ui";
import { Card, CardContent } from "@repo/ui/card";
import { Icons } from "@repo/ui/icons";

interface SkillCardProps extends Skill {
  className?: string;
}

function SkillCard({ name, description, className }: SkillCardProps) {
  return (
    <Card className={cn("bg-muted/40", className)}>
      <CardContent>
        <div className="flex items-center gap-4">
          <Icons.code className="min-h-8 min-w-8" />
          <div className="grid gap-0.5">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description ?? ""}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
