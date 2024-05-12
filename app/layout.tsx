import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/smooth-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Doe - Portfolio",
  description: "A portfolio website about me! John Doe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
            <Toaster />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
