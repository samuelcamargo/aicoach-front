import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Função utilitária para combinar nomes de classes condicionalmente,
 * usando clsx para suportar objetos e arrays, e twMerge para lidar com
 * classes conflitantes do Tailwind CSS.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
} 