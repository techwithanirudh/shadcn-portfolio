import type { NextConfig } from 'next';
import { withContentCollections } from '@content-collections/next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
    // react 19 compiler issue where shadcn rhf does not work, todo: fix
    // reactCompiler: true
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api']
  }
};

export default withContentCollections(nextConfig);
