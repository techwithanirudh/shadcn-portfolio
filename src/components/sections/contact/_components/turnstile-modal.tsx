import { Button } from '@/components/ui/button';
import {
  Credenza as Dialog,
  CredenzaContent as DialogContent,
  CredenzaDescription as DialogDescription,
  CredenzaFooter as DialogFooter,
  CredenzaHeader as DialogHeader,
  CredenzaTitle as DialogTitle,
  CredenzaTrigger as DialogTrigger
} from '@/components/ui/credenza';

import { Turnstile } from '@marsidev/react-turnstile';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { LoaderCircleIcon } from 'lucide-react';

interface TurnstileModalProps {
  open: boolean;
  callback: (token?: string) => void;
}

export function TurnstileModal({ open, callback }: TurnstileModalProps) {
  const { theme } = useTheme();

  const [, setIsLoading] = useState(true);
  const [, setTurnstileStatus] = useState<
    'success' | 'error' | 'expired' | 'required'
  >('required');

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
          <div className={'z-10 px-4 md:px-0'}>
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onWidgetLoad={() => setIsLoading(false)}
              onError={() => setTurnstileStatus('error')}
              onExpire={() => setTurnstileStatus('expired')}
              options={{
                action: 'submit-form',
                theme: theme === 'light' || theme === 'dark' ? theme : 'auto',
                size: 'flexible'
              }}
              onSuccess={(token) => {
                setTurnstileStatus('success');
                callback(token);
              }}
            />
          </div>
          <div className={'z-1 absolute h-[65px] w-full px-4 md:px-0 md:py-0'}>
            <div
              className={
                'flex h-[65px] w-full items-center justify-between rounded-md border border-border border-muted-foreground/50 bg-muted px-4'
              }
            >
              <div className={'flex items-center justify-center gap-2'}>
                <div
                  className={
                    'inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-background p-1'
                  }
                >
                  <LoaderCircleIcon className="h-7 w-7 animate-spin" />
                </div>
                Loading
              </div>
              <div>
                <p className={'max-w-[60px] text-xs font-semibold'}>
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
