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
  if (!env.NEXT_PUBLIC_CONTACT_FORM_ENABLED || !env.TURNSTILE_SECRET_KEY) {
    return {
      success: false,
      "error-codes": ["TURNSTILE_SECRET_KEY not set"],
      challenge_ts: "",
      hostname: "",
    };
  }

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
