import type { NextConfig } from 'next';
import { withContentCollections } from '@content-collections/next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
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
