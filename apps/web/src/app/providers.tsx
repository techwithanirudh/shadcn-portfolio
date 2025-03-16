"use client";

// @ts-expect-error ViewTransition is an experimental feature, and its types are not yet available
import { unstable_ViewTransition as ViewTransition } from "react";
import { ThemeProvider } from "@/components/theme-provider";

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
