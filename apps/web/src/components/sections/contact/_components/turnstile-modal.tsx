import { useState } from "react";
import { env } from "@/env";
import { Turnstile } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";

import {
  Credenza as Dialog,
  CredenzaContent as DialogContent,
  CredenzaDescription as DialogDescription,
  CredenzaHeader as DialogHeader,
  CredenzaTitle as DialogTitle,
} from "@repo/ui/credenza";
import { Icons } from "@repo/ui/icons";

import { FormError } from "./form-error";

interface TurnstileModalProps {
  open: boolean;
  callback: (token?: string) => void;
}

export function TurnstileModal({ open, callback }: TurnstileModalProps) {
  const { theme } = useTheme();

  const [, setIsLoading] = useState(true);
  const [, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");

  if (
    !env.NEXT_PUBLIC_CONTACT_FORM_ENABLED ||
    !env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  ) {
    return <div className="mt-4">
      <FormError message={"This contact form is misconfigured. Please check the form settings and try again."} />
    </div>;
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) callback();
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Verify Your Identity</DialogTitle>
          <DialogDescription>
            Before submitting the form, we need to confirm that you&apos;re not
            a robot.
          </DialogDescription>
        </DialogHeader>
        <div className="relative flex flex-col py-4 md:py-0">
          <div className={"z-10 px-4 md:px-0"}>
            <Turnstile
              siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              onWidgetLoad={() => setIsLoading(false)}
              onError={() => setTurnstileStatus("error")}
              onExpire={() => setTurnstileStatus("expired")}
              options={{
                action: "submit-form",
                theme: theme === "light" || theme === "dark" ? theme : "auto",
                size: "flexible",
              }}
              onSuccess={(token) => {
                setTurnstileStatus("success");
                callback(token);
              }}
            />
          </div>
          <div className={"absolute z-1 h-[65px] w-full px-4 md:px-0 md:py-0"}>
            <div
              className={
                "border-border border-muted-foreground/50 bg-muted flex h-[65px] w-full items-center justify-between rounded-md border px-4"
              }
            >
              <div className={"flex items-center justify-center gap-2"}>
                <div
                  className={
                    "bg-background inline-flex h-[30px] w-[30px] items-center justify-center rounded-full p-1"
                  }
                >
                  <Icons.spinner className="h-7 w-7 animate-spin" />
                </div>
                Loading
              </div>
              <div>
                <p className={"max-w-[60px] text-xs font-semibold"}>
                  Cloudflare Turnstile
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
