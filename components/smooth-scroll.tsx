// according to a github issue it is not reccomended to do it in a layout rather, have a wrapper component which does it each render
'use client'

import React from 'react';
import { ReactLenis, useLenis } from '@/lib/lenis';

interface LenisProps {
  children: React.ReactNode;
}

function SmoothScroll({children}: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;