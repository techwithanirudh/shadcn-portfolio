export interface Link {
  type: 'github' | 'live';
  url: string;
}

export interface Project {
  name: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  links?: Link[];
}
