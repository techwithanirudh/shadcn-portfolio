"use client";
import React, { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

function MFC() {
  useEffect(() => {
    const cursor = new MouseFollower();
  });

  return <div>MouseFollower</div>;
}

export default MFC;
