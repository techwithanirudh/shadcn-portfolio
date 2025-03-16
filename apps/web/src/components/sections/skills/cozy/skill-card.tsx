import type { Skill } from "@/types/skill";
import {
  MorphingDialog as Dialog,
  MorphingDialogClose as DialogClose,
  MorphingDialogContainer as DialogContainer,
  MorphingDialogContent as DialogContent,
  MorphingDialogDescription as DialogDescription,
  MorphingDialogImage as DialogImage,
  MorphingDialogSubtitle as DialogSubtitle,
  MorphingDialogTitle as DialogTitle,
  MorphingDialogTrigger as DialogTrigger,
} from "@/components/fancy/morphing-dialog";
import TextReveal from "@/components/fancy/text-reveal";
import { MemoizedReactMarkdown } from "@/components/markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { cn } from "@repo/ui";
import { Icons } from "@repo/ui/icons";

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
  className,
}: SkillCardProps) {
  return (
    <Dialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className={cn(
          "flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900",
          className,
        )}
      >
        {/* <DialogImage
          src="/eb-27-lamp-edouard-wilfrid-buquet.jpg"
          alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
          className="h-48 w-full object-cover"
        /> */}
        <div className="flex grow flex-col items-end justify-between gap-4 p-6">
          <button
            type="button"
            className="relative ml-1 flex h-10 w-10 shrink-0 scale-100 appearance-none items-center justify-center rounded-full border border-zinc-950/10 text-zinc-500 transition-colors select-none hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <Icons.add size={18} />
          </button>
          <div className="flex w-full flex-col gap-2">
            <DialogImage
              src={thumbnail ?? "/placeholder.svg"}
              alt={`An image which depicts the skill (${name})`}
              className="h-12 w-12 object-cover object-top"
              style={{
                borderRadius: "4px",
              }}
            />
            <DialogTitle className="text-3xl leading-8 font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              <TextReveal>{name}</TextReveal>
            </DialogTitle>
            <DialogSubtitle className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400">
              <TextReveal>{description ?? ""}</TextReveal>
            </DialogSubtitle>
          </div>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white sm:w-[500px] dark:border-zinc-50/10 dark:bg-zinc-900"
        >
          <DialogImage
            src={thumbnail ?? "/placeholder.svg"}
            alt={`An image which depicts the skill (${name})`}
            className="h-full w-full"
          />
          <div className="flex flex-col gap-2 p-6">
            <DialogTitle className="text-3xl leading-8 font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
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
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <MemoizedReactMarkdown
                className="dark:prose-invert prose text-muted-foreground prose-p:leading-relaxed prose-pre:p-0 min-w-full break-words"
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                  p({ children }) {
                    return <p className="mb-2 last:mb-0">{children}</p>;
                  },
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
