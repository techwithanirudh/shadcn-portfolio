import {
  Header,
  Hero,
  About,
  Skills,
  Testimonials,
  Projects,
  Contact,
  Footer
} from '@/components/sections'

import Preloader from '@/components/preloader/preloader'
import Cursor from '@/components/cursor/cursor'
import SmoothScroll from '@/components/smooth-scroll'

export default function Home() {
  return (
    <SmoothScroll>
      <div className="overflow-hidden">
        <div className="absolute inset-0 z-50 h-full w-full">
          <Preloader />
          <div className="flex min-h-[100dvh] flex-col">
            <Header />
            <main className="flex-1">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Testimonials />
              <Contact />
              <Footer />
            </main>
          </div>
          <Cursor />
        </div>
      </div>
    </SmoothScroll>
  )
}
