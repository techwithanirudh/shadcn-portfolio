// according to a github issue it is not reccomended to render this in a layout rather, have a wrapper component which does it each render
// https://github.com/darkroomengineering/lenis/issues/319
"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: LenisProps) {
  const lenis = useLenis();

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.125,
        duration: 1.5,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
