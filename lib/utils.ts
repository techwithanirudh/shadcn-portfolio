import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimString(len: number, str: string) {
  if (str.length > len) {
    return str.substring(0, len).trim() + '...';
  }
  return str;
}
