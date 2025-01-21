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

export const getYearDisplay = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  if (startYear < 1900 || startYear > currentYear) {
    throw new Error('Invalid start year');
  }
  return startYear === currentYear ? startYear : `${startYear}-${currentYear}`;
};