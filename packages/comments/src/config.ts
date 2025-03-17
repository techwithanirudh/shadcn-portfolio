import type { AuthAdapter } from "@fuma-comment/server";
import type { CustomRequest } from "@fuma-comment/server/custom";
import { createBetterAuthAdapter } from "@fuma-comment/server/adapters/better-auth";
import { createDrizzleAdapter } from "@fuma-comment/server/adapters/drizzle";

import { auth as betterAuth } from "@repo/auth";
import { db } from "@repo/db/client";
import { comments, rates, roles, users } from "@repo/db/schema";

export const auth: AuthAdapter<CustomRequest> =
  createBetterAuthAdapter(betterAuth);
export const storage = createDrizzleAdapter({
  db,
  schemas: {
    comments,
    rates,
    roles,
    user: users,
  },
  auth: "better-auth",
});
