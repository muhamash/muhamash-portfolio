"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 text-gray-100 bg-cyan-800 rounded-lg font-code shadow-md hover:bg-gray-700 transition-all duration-200 my-3"
    >
      <ArrowLeft className="w-5 h-5 hover:-translate-x-1 transition-all duration-200" />
      <span className="text-sm font-medium">Go back</span>
    </button>
  );
}