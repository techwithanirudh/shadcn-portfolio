export interface Project {
  title: string;
  description?: string;
  date?: Date | string;
  website?: string;
  github?: string;
  tags?: { label: string }[];
  // thumbnail: string;
}
