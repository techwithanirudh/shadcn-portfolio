import Link from 'next/link';
import Cursor from '@/components/cursor/cursor';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Line from '@/components/motion/line';

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-4 md:px-0">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
        <div>
          <h1 className="mb-4 text-[20vw] font-bold leading-none md:mb-0 md:text-[35vw]">
            404
          </h1>
          <Line className={'-my-16 hidden md:block'} />
        </div>

        <div className="flex flex-col justify-center md:ml-8">
          <p className="mb-4 text-xl">page not found...</p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'self-center rounded-full px-8 py-2 md:self-start',
              'md:mt-32'
            )}
          >
            Home
          </Link>
        </div>
      </div>
      <Cursor />
    </div>
  );
}
