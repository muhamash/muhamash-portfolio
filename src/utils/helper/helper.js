import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export async function downloadResume ()
{
    return {
        success: true,
        data: "/resume.pdf",
    };
}

export async function downloadRecommendation() {
    return {
        success: true,
        data: "/lwsReco.pdf",
    };
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}