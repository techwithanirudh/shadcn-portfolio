import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignore: ['**/fixtures/**'],
  ignoreDependencies: [
    'prettier-plugin-*',
    'sharp',
    // TailwindCSS v4 is not detectable currently
    'tailwindcss',
    // Can't detect `pnpm with-env tsx`
    'tsx'
  ],
  workspaces: {
    '.': {
      entry: ['turbo/generators/config.ts']
    },
    'apps/web': {
      entry: ['content-collections.ts']
    },
    'packages/eslint-config': {
      // @see https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/325
      ignoreDependencies: ['@eslint/config-inspector', 'eslint-plugin-tailwindcss']
    },
    'packages/ui': {
      // @see https://github.com/shadcn-ui/ui/issues/4792
      ignoreDependencies: ['@radix-ui/react-context', '@tailwindcss/typography']
    }
  }
}

export default config