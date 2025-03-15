import type { ComponentProps } from "react";
import { UserIcon } from "lucide-react";

import type { User } from "../types/user";
import { cn } from "@r";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar";

export interface UserAvatarClassNames {
  base?: string;
  image?: string;
  fallback?: string;
  fallbackIcon?: string;
}

export interface UserAvatarProps {
  user?: User;
  classNames?: UserAvatarClassNames;
}

export function UserAvatar({
  user,
  classNames,
  className,
  ...props
}: UserAvatarProps & ComponentProps<typeof Avatar>) {
  const name = user?.name || user?.fullName || user?.firstName || user?.email;
  const src = (user?.image || user?.avatar || user?.avatarUrl) as string;

  return (
    <Avatar key={src} className={cn(className, classNames?.base)} {...props}>
      <AvatarImage
        alt={name || "Avatar"}
        className={classNames?.image}
        src={
          user && !user.isAnonymous
            ? ((user.image || user.avatar || user.avatarUrl) as string)
            : undefined
        }
      />

      <AvatarFallback
        className={cn("uppercase", classNames?.fallback)}
        delayMs={src ? 200 : 0}
      >
        {firstTwoCharacters(name) || (
          <UserIcon className={cn("w-[55%]", classNames?.fallbackIcon)} />
        )}
      </AvatarFallback>
    </Avatar>
  );
}

const firstTwoCharacters = (name?: string | null) => name?.slice(0, 2);
