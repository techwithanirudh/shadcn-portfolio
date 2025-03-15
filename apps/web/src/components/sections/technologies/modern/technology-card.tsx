import type { Technology } from "@/types/technology";
import React from "react";
import VariableFontCursorProximity from "@/components/fancy/variable-font-cursor-proximity";

import { cn } from "@repo/ui";

interface TechnologyCardProps extends Technology {
  className?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function TechnologyCard({ name, containerRef }: TechnologyCardProps) {
  return (
    <VariableFontCursorProximity
      label={name ?? ""}
      className={cn(
        "text-2xl leading-none sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl",
      )}
      fromFontVariationSettings="'wght' 400, 'slnt' 0"
      toFontVariationSettings="'wght' 900, 'slnt' -10"
      radius={200}
      containerRef={containerRef}
    />
  );
}

export default TechnologyCard;
