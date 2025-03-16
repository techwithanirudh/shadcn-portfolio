"use client";

import { redirect } from "next/navigation";
import { Comments } from "@fuma-comment/react";

export function PostComments({ slug }: { slug: string }) {
  return (
    <Comments
      page={slug}
      className="w-full"
      auth={{
        type: "api",
        signIn: () => {
          redirect("/login");
        },
      }}
    />
  );
}
