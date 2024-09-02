'use client';
import { AnimatePresence } from 'framer-motion';

import Loader from '@/components/preloader/loader';

function Loading() {
  return (
    <AnimatePresence mode="wait">
      <Loader />
    </AnimatePresence>
  );
}

export default Loading;
