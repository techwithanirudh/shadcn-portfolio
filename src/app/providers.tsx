'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { TransitionProvider } from '@/components/transition-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TransitionProvider speed={1.3}>{children}</TransitionProvider>
    </ThemeProvider>
  );
}
