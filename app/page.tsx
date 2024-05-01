import {
  Header,
  Hero,
  About,
  Skills,
  Testimonials,
  Projects,
  Contact,
  Footer
} from "@/components/sections";

export default function Home() {
  return (
    <div className="overflow-hidden">
        <div className="absolute inset-0 z-50 h-full w-full">
          <div className="flex min-h-[100dvh] flex-col">
            <Header />
            <main className="flex-1">
              <Hero />
              <Projects />
              <About />
              <Skills />
              <Testimonials />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
    </div>
  );
}
