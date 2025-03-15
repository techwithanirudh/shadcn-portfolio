import Cursor from "@/components/cursor/cursor";
import { Footer, Header } from "@/components/sections";
import SmoothScroll from "@/components/smooth-scroll";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
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
