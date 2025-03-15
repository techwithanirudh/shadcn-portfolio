"use server";

import "server-only";

import { env } from "@/env";

interface CloudflareTurnstileResponse {
  success: boolean;
  "error-codes": string[];
  challenge_ts: string;
  hostname: string;
}

export async function validateTurnstileToken(
  token: string,
): Promise<CloudflareTurnstileResponse> {
  const req = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: `secret=${encodeURIComponent(env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(token)}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    },
  );

  const res = (await req.json()) as CloudflareTurnstileResponse;
  return res;
}
