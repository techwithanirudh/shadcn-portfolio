import type { NextConfig } from 'next';
import { withContentCollections } from '@content-collections/next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    },
    reactCompiler: true
  }
};

export default withContentCollections(nextConfig);
