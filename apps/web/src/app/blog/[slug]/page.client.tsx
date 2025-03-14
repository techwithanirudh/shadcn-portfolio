"use client";

import { Comments } from "@fuma-comment/react";
import { signIn } from "@repo/auth/client";

export function PostComments() {
  return (
    <Comments
      page="default"
      className="w-full max-w-[800px]"
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
