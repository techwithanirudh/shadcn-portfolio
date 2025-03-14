import React from "react";
import { metadata as meta } from "@/app/config";
import Link from "@/components/fancy/link";
import { copyright, footer } from "@/components/sections/footer/config";
import { getYearDisplay } from "@/lib/utils";

function Footer() {
  const { startYear } = copyright;
  const yearDisplay = getYearDisplay(startYear);

  return (
    <footer className="border-border flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {yearDisplay} {meta.author.name}. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
