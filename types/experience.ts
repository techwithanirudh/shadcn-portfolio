import React from 'react';

export interface Experience {
  name: string;
  description?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}
