import baseConfig, { restrictEnvAccess } from "@repo/eslint-config/base";
import nextjsConfig from "@repo/eslint-config/nextjs";
import reactConfig from "@repo/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
