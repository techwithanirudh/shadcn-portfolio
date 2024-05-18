import React from 'react';

export interface Skill {
  name: string;
  description?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}
