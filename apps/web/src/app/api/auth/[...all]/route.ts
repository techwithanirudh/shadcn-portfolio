import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@repo/auth";

export const { POST, GET } = toNextJsHandler(auth);
