import type { NextConfig } from 'next';
import { withContentCollections } from '@content-collections/next';

// todo: setup eslint CI
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@acme/api",
    "@acme/auth",
    "@acme/db",
    "@acme/ui",
    "@acme/validators",
  ],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    viewTransition: true,
    serverActions: {
      allowedOrigins: ['localhost:3000']
    },
    reactCompiler: true
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api']
  }
};

export default withContentCollections(nextConfig);
