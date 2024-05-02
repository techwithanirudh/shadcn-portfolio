"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Preloader from "./loader";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);

  return (
    <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
  );
}

export default Index;
