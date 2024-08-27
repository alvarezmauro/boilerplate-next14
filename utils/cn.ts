import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ClassName utility function.
 * (It makes easier to conditionally add Tailwind CSS classes)
 * ref: https://youtu.be/re2JFITR7TI?si=WbAPsOU08NvWkgyj
 *
 * @param inputs class names
 * @returns tailwind class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
