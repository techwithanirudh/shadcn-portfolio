import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'john@example.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/',
      Icon: SiGithub
    },
    {
      name: 'Youtube',
      href: 'https://youtube.com/',
      Icon: SiYoutube
    },
    {
      name: 'X',
      href: 'https://x.com/',
      Icon: SiX
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
