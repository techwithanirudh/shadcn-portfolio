'use client';
import React from 'react';
import Reveal from '@/components/reveal';

const TextReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const processChildren = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === 'string') {
      return child.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          <Reveal transition={{ duration: 0.5, delay: 0.01 * index }}>
            {word}
          </Reveal>
          {index !== child.split(' ').length - 1 && ' '}
        </React.Fragment>
      ));
    } else if (React.isValidElement(child)) {
      return React.cloneElement(
        child,
        {},
        processChildren(child.props.children)
      );
    } else if (Array.isArray(child)) {
      return child.map((nestedChild, index) => (
        <React.Fragment key={index}>
          {processChildren(nestedChild)}
        </React.Fragment>
      ));
    }
    return child;
  };

  return <>{processChildren(children)}</>;
};

export default TextReveal;
