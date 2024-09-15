import { defineCollection, defineConfig } from '@content-collections/core';

import { compileMDX } from '@content-collections/mdx';
import {
  createMetaSchema,
  createDocSchema,
  transformMDX
} from '@fumadocs/content-collections/configuration';

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.mdx',
  schema: createDocSchema,
  transform: transformMDX
});

const metas = defineCollection({
  name: 'meta',
  directory: 'content/projects',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema
});

export default defineConfig({
  collections: [projects, metas]
});
