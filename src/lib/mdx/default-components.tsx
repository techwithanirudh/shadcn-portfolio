// credit: fuma-nama
import { HTMLAttributes, type AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

export function MDXLink({
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) return <a {...props} />;

  const isExternal = href.startsWith('https://') || href.startsWith('http://');

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
    );
  }

  return <Link href={href} {...props} />;
}

export const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export function Heading({
  as: As,
  ...props
}: { as: (typeof headingTypes)[number] } & HTMLAttributes<HTMLHeadingElement>) {
  if (props.id)
    return (
      <a href={`#${props.id}`} className="group no-underline">
        <As {...props}>
          <span className="absolute -ml-4 mt-0.5 text-base text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
            #
          </span>
          {props.children}
        </As>
      </a>
    );

  return <As {...props}>{props.children}</As>;
}
