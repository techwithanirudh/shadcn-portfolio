import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon
} from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Web Development',
    description: 'Building beautiful and functional websites.',
    Icon: CodeIcon
  },
  {
    name: 'UI/UX Design',
    description: 'Creating delightful user experiences.',
    Icon: LayoutIcon
  },
  {
    name: 'Database Management',
    description: 'Storing and organizing data efficiently.',
    Icon: DatabaseIcon
  },
  {
    name: 'Mobile Development',
    description: 'Crafting apps for smartphones and tablets.',
    Icon: SmartphoneIcon
  }
];

export { skills };
