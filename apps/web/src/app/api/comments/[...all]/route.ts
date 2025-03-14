import { NextComment } from "@repo/comments";
import { storage, auth } from "@repo/comments/config";

export const { GET, DELETE, PATCH, POST } = NextComment({
  mention: { enabled: true },
  auth: auth,
  storage: storage
});
