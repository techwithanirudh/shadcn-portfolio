import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase your coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio/cover.jpg'
  },
  {
    name: 'Recipe Sharing App',
    slug: 'recipe_app',
    description:
      'A social app for food lovers where users can post, share, and discover recipes from around the world.',
    thumbnail: '/images/projects/recipe_app/cover.jpg'
  },
  {
    name: 'Virtual Study Group Platform',
    slug: 'study_group',
    description:
      'A platform where students can form virtual study groups, schedule sessions, and share resources in real-time.',
    thumbnail: '/images/projects/study_group/cover.jpg'
  },
  {
    name: 'Fitness Tracker App',
    slug: 'fitness_tracker',
    description:
      'A mobile app that helps users track their fitness activities, set goals, and monitor progress with motivational tools.',
    thumbnail: '/images/projects/fitness_tracker/cover.jpg'
  },
  {
    name: 'Eco-friendly Marketplace',
    slug: 'eco_marketplace',
    description:
      'An e-commerce platform dedicated to eco-friendly products where users can buy, sell, and learn about sustainable living.',
    thumbnail: '/images/projects/eco_marketplace/cover.jpg'
  },
  {
    name: 'Interactive Coding Tutorial Site',
    slug: 'coding_tutorials',
    description:
      'A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.',
    thumbnail: '/images/projects/coding_tutorials/cover.jpg'
  }
];

export { projects };
