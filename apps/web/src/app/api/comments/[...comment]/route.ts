import { NextComment } from "@repo/comments";
import { auth, storage } from "@repo/comments/config";

export const { GET, DELETE, PATCH, POST } = NextComment({
  // role: 'database', todo use roel in auth
  mention: { enabled: true },
  auth: auth,
  storage: storage,
});
