import classNames from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

export const cx = (...args: ClassValue[]) => twMerge(classNames(...args));
