import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

import type { auth } from "./index";

// @see https://github.com/better-auth/better-auth/issues/1391
const authClient: ReturnType<typeof createAuthClient> = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
  //   baseURL: env.BETTER_AUTH_URL,
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      }
    },
  },
});

export const signIn: typeof authClient.signIn = authClient.signIn;
export const signOut: typeof authClient.signOut = authClient.signOut;
export const useSession: typeof authClient.useSession = authClient.useSession;

export type User = (typeof authClient.$Infer.Session)["user"];
