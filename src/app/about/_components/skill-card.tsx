import {
  MorphingDialog as Dialog,
  MorphingDialogTrigger as DialogTrigger,
  MorphingDialogContent as DialogContent,
  MorphingDialogTitle as DialogTitle,
  MorphingDialogImage as DialogImage,
  MorphingDialogSubtitle as DialogSubtitle,
  MorphingDialogClose as DialogClose,
  MorphingDialogDescription as DialogDescription,
  MorphingDialogContainer as DialogContainer
} from '@/components/motion/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { Skill } from '@/types/skill';

import { trimLen } from '@/components/sections/skills/config';
import { cn, trimString } from '@/lib/utils';

import { MemoizedReactMarkdown } from '@/components/markdown';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import TextReveal from '@/components/motion/text-reveal';

interface SkillCardProps extends Skill {
  index: number;
  className?: string;
}

// todo: use text reveal for name and description
// todo: use motion-primitives text-reveal
export default function SkillCard({
  name,
  description,
  thumbnail,
  className
}: SkillCardProps) {
  return (
    <Dialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px'
        }}
        className={cn(
          'flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900',
          className
        )}
      >
        {/* <DialogImage
          src="/eb-27-lamp-edouard-wilfrid-buquet.jpg"
          alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
          className="h-48 w-full object-cover"
        /> */}
        <div className="flex flex-grow flex-col items-end justify-between p-6">
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <DialogImage
                src={thumbnail ?? '/placeholder.svg'}
                alt={`An image which depicts the skill (${name})`}
                className="h-12 w-12 object-cover object-top"
                style={{
                  borderRadius: '4px'
                }}
              />
              <button
                type="button"
                className="relative ml-1 flex h-10 w-10 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-full border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={18} />
              </button>
            </div>
            <DialogTitle className="text-3xl font-bold leading-8 tracking-tight text-zinc-950 dark:text-zinc-50">
              <TextReveal>{name}</TextReveal>
            </DialogTitle>
            <DialogSubtitle className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400">
              <TextReveal>
                {trimLen != -1
                  ? trimString(trimLen, description || '')
                  : (description ?? '')}
              </TextReveal>
            </DialogSubtitle>
          </div>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px'
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <DialogImage
            src={thumbnail ?? '/placeholder.svg'}
            alt={`An image which depicts the skill (${name})`}
            className="h-full w-full"
          />
          <div className="flex flex-col gap-2 p-6">
            <DialogTitle className="text-3xl font-bold leading-8 tracking-tight text-zinc-950 dark:text-zinc-50">
              {name}
            </DialogTitle>
            {/* <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {description}
            </DialogSubtitle> */}
            <DialogDescription
              className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400"
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 }
              }}
            >
              <MemoizedReactMarkdown
                className="dark:prose-invert prose min-w-full break-words text-muted-foreground prose-p:leading-relaxed prose-pre:p-0"
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                  p({ children }) {
                    return <p className="mb-2 last:mb-0">{children}</p>;
                  }
                }}
              >
                {description}
              </MemoizedReactMarkdown>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
