import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-gray-200 px-4 py-6 sm:flex-row md:px-6 dark:border-gray-700">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Sriram Balaji. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href="https://blog.srirambalaji.com"
        >
          Blog
        </Link>
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href="https://ageofcopilots.substack.com"
        >
          Newsletter
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
