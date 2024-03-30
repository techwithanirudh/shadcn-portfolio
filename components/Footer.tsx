import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Sriram Balaji. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="https://blog.srirambalaji.com"
        >
          Blog
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="https://newsletter.srirambalaji.com"
        >
          Newsletter
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
