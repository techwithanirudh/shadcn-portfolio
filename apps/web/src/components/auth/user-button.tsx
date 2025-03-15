"use client";

import Link from "next/link";
import { LogInIcon, LogOutIcon } from "lucide-react";

import type { User } from "@repo/auth/types";
import { signOut, useSession } from "@repo/auth/client";
import { cn } from "@repo/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { Skeleton } from "@repo/ui/skeleton";

import type { UserAvatarClassNames } from "./user-avatar";
import { UserAvatar } from "./user-avatar";

export interface UserButtonClassNames {
  base?: string;
  skeleton?: string;
  trigger?: {
    base?: string;
    avatar?: UserAvatarClassNames;
    skeleton?: string;
  };
  content?: {
    base?: string;
    avatar?: UserAvatarClassNames;
    menuItem?: string;
    separator?: string;
  };
}

export interface UserButtonProps {
  className?: string;
  classNames?: UserButtonClassNames;
}

export function UserButton({ className, classNames }: UserButtonProps) {
  const { data: sessionData, isPending: sessionPending } = useSession();
  const user = sessionData?.user as User;

  const isPending = sessionPending;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "hover:bg-accent/50 rounded-md",
          classNames?.trigger?.base,
        )}
        disabled={isPending}
      >
        {isPending ? (
          <Skeleton
            className={cn(
              "size-8 rounded-md",
              className,
              classNames?.base,
              classNames?.skeleton,
              classNames?.trigger?.skeleton,
            )}
          />
        ) : (
          <UserAvatar
            className={cn("size-8", className, classNames?.base)}
            classNames={classNames?.trigger?.avatar}
            user={user}
          />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn("me-3 max-w-64", classNames?.content?.base)}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {user ? (
          <div className="flex items-center gap-2 p-2">
            <UserAvatar classNames={classNames?.content?.avatar} user={user} />

            <div className="flex flex-col truncate">
              <div className="truncate text-sm font-medium">
                {user.name || user.email}
              </div>

              {user.name && (
                <div className="text-muted-foreground truncate text-xs">
                  {user.email}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-muted-foreground px-2 py-1 text-xs">
            Account
          </div>
        )}

        <DropdownMenuSeparator className={classNames?.content?.separator} />

        {!user ? (
          <>
            <DropdownMenuItem className={classNames?.content?.menuItem} asChild>
              <Link href={`/login`}>
                <LogInIcon />
                Sign In
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem
              className={classNames?.content?.menuItem}
              onClick={() => signOut()}
            >
              <LogOutIcon />
              Log Out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
