"use client";

import { Comments } from "@fuma-comment/react";
import { signIn } from "@repo/auth/client";

export function PostComments({ slug }: {slug: string}) {
  return (
    <Comments
      page={slug}
      className="w-full"
      auth={{
        type: "api",
        signIn: () => {
          void signIn.social({
            provider: "github",
          });
        }
      }}
    />
  );
}
