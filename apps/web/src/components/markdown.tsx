import type { FC } from "react";
import type { Options } from "react-markdown";
import { memo } from "react";
import ReactMarkdown from "react-markdown";

export const MemoizedReactMarkdown: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className,
);
