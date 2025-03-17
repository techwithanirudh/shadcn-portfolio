import type { auth } from ".";

export type Session = typeof auth.$Infer.Session;
export type User = Session["user"];
