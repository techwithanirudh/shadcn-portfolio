'use client';

import { useState, useEffect } from 'react';
import Preloader from '@/components/preloader/preloader';
import { AnimatePresence } from 'framer-motion';

// Custom hook to estimate page load time
const useEstimatedLoadTime = () => {
  const [estimatedTime, setEstimatedTime] = useState(2000); // Default 2 seconds

  useEffect(() => {
    const start = performance.now();

    const updateEstimate = () => {
      const end = performance.now();
      const loadTime = end - start;
      setEstimatedTime(Math.max(loadTime, 1000)); // Ensure minimum of 1 second
    };

    window.addEventListener('load', updateEstimate);
    return () => window.removeEventListener('load', updateEstimate);
  }, []);

  return estimatedTime;
};

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const estimatedLoadTime = useEstimatedLoadTime();

  useEffect(() => {
    const handleLoad = () => {
      let startTime = Date.now();
      let interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = Math.min(
          (elapsedTime / estimatedLoadTime) * 100,
          99
        );
        setProgress(newProgress);

        if (newProgress >= 99) {
          clearInterval(interval);

          setProgress(100);
          setTimeout(() => setIsVisible(false), 500); // Close after 0.5s at 100%
        }
      }, 50);

      return () => clearInterval(interval);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLoad);
    } else {
      handleLoad();
    }

    return () => document.removeEventListener('DOMContentLoaded', handleLoad);
  }, [estimatedLoadTime]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && <Preloader progress={Math.round(progress)} />}
    </AnimatePresence>
  );
}
