import nextPlugin from "@next/eslint-plugin-next";
import reactCompilerPlugin from "eslint-plugin-react-compiler";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
      "react-compiler": reactCompilerPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactCompilerPlugin.configs.recommended.rules,
      // TypeError: context.getAncestors is not a function
      "@next/next/no-duplicate-head": "off",
    },
  },
];
