'use client';

import React from 'react';
import { Reveal as AnimatedText } from '@/components/reveal';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = ''
}) => {
  const generatePhrases = (child: React.ReactNode): string[] => {
    if (typeof child === 'string') {
      return child.split(' ');
    } else if (React.isValidElement(child)) {
      const element = child as React.ReactElement & {
        props?: {
          children?: React.ReactNode;
        };
      };

      if (element.props && 'children' in element.props) {
        return generatePhrases(element.props.children);
      }
      return [];
    } else if (Array.isArray(child)) {
      return child.flatMap(nestedChild => generatePhrases(nestedChild));
    }
    return [];
  };

  const phrases = generatePhrases(children);

  return <AnimatedText phrases={phrases} className={className} />;
};

export default TextReveal;

