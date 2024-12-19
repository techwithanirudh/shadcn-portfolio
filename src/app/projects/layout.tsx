import type { Metadata } from 'next';

import { Footer, Header } from '@/components/sections';

import Loader from '@/app/loader';
import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function ProjectLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      {/* <Loader /> */}
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
