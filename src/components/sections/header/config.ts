import { Link } from '@/types/link';

// This is a setting for the compact header
const linkLimit = 4;
//

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: 'home.jpg'
  },
  {
    title: 'About',
    href: '#about',
    thumbnail: 'about.jpg'
  },
  {
    title: 'Projects',
    href: '#projects',
    thumbnail: 'projects.jpg'
  },
  {
    title: 'Skills',
    href: '#skills',
    thumbnail: 'skills.jpg'
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
    thumbnail: 'testimonials.jpg'
  },
  {
    title: 'Blog',
    href: 'https://blog.example.com',
    thumbnail: 'blog.jpg',
    target: '_blank'
  },
  {
    title: 'Contact',
    href: '#contact',
    thumbnail: 'contact.jpg'
  }
];

export { linkLimit, links };
