import type { ComponentProps } from "react";

import type { User } from "@repo/auth/types";
import { cn } from "@repo/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar";
import { Icons } from "@repo/ui/icons";

export interface UserAvatarClassNames {
  base?: string;
  image?: string;
  fallback?: string;
  fallbackIcon?: string;
}

export interface UserAvatarProps {
  user?: User | null;
  classNames?: UserAvatarClassNames;
}

export function UserAvatar({
  user,
  classNames,
  className,
  ...props
}: UserAvatarProps & ComponentProps<typeof Avatar>) {
  const name = user?.name || user?.email;
  const src = user?.image;

  return (
    <Avatar
      key={src}
      className={cn("rounded-md", className, classNames?.base)}
      {...props}
    >
      <AvatarImage
        alt={name ?? "Avatar"}
        className={cn("rounded-md", classNames?.image)}
        src={src ?? undefined}
      />

      <AvatarFallback
        className={cn("rounded-md uppercase", classNames?.fallback)}
        delayMs={src ? 200 : 0}
      >
        {firstTwoCharacters(name) ?? (
          <Icons.user className={cn("w-[55%]", classNames?.fallbackIcon)} />
        )}
      </AvatarFallback>
    </Avatar>
  );
}

const firstTwoCharacters = (name?: string | null) => name?.slice(0, 2);
