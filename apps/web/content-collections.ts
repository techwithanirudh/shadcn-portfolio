import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createDocSchema,
  createMetaSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: (z) => {
    const docSchema = createDocSchema(z);
    return {
      ...docSchema,
      website: z.string().optional(),
      github: z.string().optional(),
      tags: z
        .array(
          z.object({
            label: z.string(),
          }),
        )
        .optional(),
      date: z
        .string()
        .or(z.date())
        .transform((value, context) => {
          try {
            return new Date(value);
          } catch {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Invalid date",
            });
            return z.NEVER;
          }
        }),
    };
  },
  transform: transformMDX,
});

const projectMetas = defineCollection({
  name: "projectMeta",
  directory: "content/projects",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
});

const blog = defineCollection({
  name: "blog",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: (z) => {
    const docSchema = createDocSchema(z);
    return {
      ...docSchema,
      author: z.string(),
      date: z
        .string()
        .or(z.date())
        .transform((value, context) => {
          try {
            return new Date(value);
          } catch {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Invalid date",
            });
            return z.NEVER;
          }
        }),
    };
  },
  transform: transformMDX,
});

const blogMetas = defineCollection({
  name: "blogMeta",
  directory: "content/blog",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
});

export default defineConfig({
  collections: [projects, projectMetas, blog, blogMetas],
});
