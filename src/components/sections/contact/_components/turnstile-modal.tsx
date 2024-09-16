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

export function TurnstileModal() {
  const { theme } = useTheme();
  const [turnstileStatus, setTurnstileStatus] = useState<
    'success' | 'error' | 'expired' | 'required'
  >('required');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Submit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Verify Your Identity</DialogTitle>
          <DialogDescription>
            Before submitting the form, we need to confirm that you&apos;re not
            a robot.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 px-4 py-4 md:px-0">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onError={() => setTurnstileStatus('error')}
            onExpire={() => setTurnstileStatus('expired')}
            options={{
              action: 'submit-form',
              theme: theme === 'light' || theme === 'dark' ? theme : 'auto',
              size: 'flexible'
            }}
            onSuccess={() => {
              setTurnstileStatus('success');
            }}
          />
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
