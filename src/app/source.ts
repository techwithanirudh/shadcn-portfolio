import { allProjects, allMetas } from 'content-collections';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from '@fumadocs/content-collections';

export const projects = loader({
  baseUrl: '/projects',
  source: createMDXSource(allProjects, allMetas)
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(allProjects, allMetas)
});
