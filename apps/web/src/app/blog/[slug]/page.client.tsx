"use client";

import { Comments } from "@fuma-comment/react";
import { redirect } from "next/navigation";

export function PostComments({ slug }: { slug: string }) {
  return (
    <Comments
      page={slug}
      className="w-full"
      auth={{
        type: "api",
        signIn: () => {
          redirect('/login');
        }
      }}
    />
  );
}
