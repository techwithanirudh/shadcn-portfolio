import { defineCollection, defineConfig } from '@content-collections/core';
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

const projectMetas = defineCollection({
  name: 'projectMeta',
  directory: 'content/projects',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema
});

const blog = defineCollection({
  name: 'blog',
  directory: 'content/blog',
  include: '**/*.mdx',
  schema: createDocSchema,
  transform: transformMDX
});

const blogMetas = defineCollection({
  name: 'blogMeta',
  directory: 'content/blog',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema
});

export default defineConfig({
  collections: [projects, projectMetas, blog, blogMetas]
});
