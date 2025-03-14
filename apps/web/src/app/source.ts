import { createMDXSource } from "@fumadocs/content-collections";
import {
  allBlogMetas,
  allBlogs,
  allProjectMetas,
  allProjects,
} from "content-collections";
import { loader } from "fumadocs-core/source";

export const project = loader({
  baseUrl: "/projects",
  source: createMDXSource(allProjects, allProjectMetas),
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(allBlogs, allBlogMetas),
});
