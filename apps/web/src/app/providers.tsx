'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { TransitionProvider } from '@/components/transition-provider';
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ViewTransition>{children}</ViewTransition>
    </ThemeProvider>
  );
}
