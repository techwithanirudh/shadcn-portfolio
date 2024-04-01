import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./cursor.css";

import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundGradientAnimation } from "@/components/bg-gradient";

import MFC from "@/components/MouseFollower";

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
          <MFC />
          <BackgroundGradientAnimation interactive={false}>
            <div className="absolute inset-0 z-50 h-full w-full">
              {children}
            </div>
          </BackgroundGradientAnimation>
        </ThemeProvider>
      </body>
    </html>
  );
}
