"use client";

import { signIn } from "@repo/auth/client";
import { cn } from "@repo/ui";
import { Button } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import { Icons } from "@repo/ui/icons";

function SignInCard() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Sign in with your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div
            className={cn(
              "flex w-full items-center gap-2",
              "flex-col justify-between",
            )}
          >
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              onClick={async () => {
                await signIn.social({
                  provider: "google",
                  callbackURL: "/",
                });
              }}
            >
              <Icons.google />
              Sign in with Google
            </Button>
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              onClick={async () => {
                await signIn.social({
                  provider: "github",
                  callbackURL: "/",
                });
              }}
            >
              <Icons.gitHub />
              Sign in with Github
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
      <SignInCard />
    </main>
  );
}
