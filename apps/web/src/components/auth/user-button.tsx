"use client";

import Link from "next/link";

import type { User } from "@repo/auth/types";
import { signOut, useSession } from "@repo/auth/client";
import { cn } from "@repo/ui";
import { Button } from "@repo/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { Icons } from "@repo/ui/icons";
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
  const user = sessionData?.user as User | null;

  const isPending = sessionPending;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "hover:bg-accent/50 rounded-md bg-transparent",
          classNames?.trigger?.base,
        )}
        asChild
      >
        <Button
          variant="outline"
          size="icon"
          className="border-none bg-transparent"
          disabled={isPending}
        >
          {isPending ? (
            <Skeleton
              className={cn(
                "size-full rounded-md",
                className,
                classNames?.base,
                classNames?.skeleton,
                classNames?.trigger?.skeleton,
              )}
            />
          ) : (
            <UserAvatar
              className={cn("size-full", className, classNames?.base)}
              classNames={classNames?.trigger?.avatar}
              user={user}
            />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn("max-w-64", classNames?.content?.base)}
        onCloseAutoFocus={(e) => e.preventDefault()}
        align="end"
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
          <div className="text-muted-foreground px-2 py-1 text-xs">Account</div>
        )}

        <DropdownMenuSeparator className={classNames?.content?.separator} />

        {!user ? (
          <>
            <DropdownMenuItem className={classNames?.content?.menuItem} asChild>
              <Link href={`/login`}>
                <Icons.logIn />
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
              <Icons.logOut />
              Log Out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
