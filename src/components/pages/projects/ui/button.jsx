"use client"

import { cn } from "@/utils/helper/helper";

const Button = ({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  onClick, 
  ...props 
}) => {
  const buttonClasses = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-[3px]",
    {
      // Variants
      "bg-sky-600 text-white hover:bg-blue-500 focus:ring-sky-400": variant === "primary",
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400": variant === "secondary",
      "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-gray-400":
        variant === "outline",
      "bg-green-500 text-white focus:ring-green-400 rounded-[3px]": variant === "destructive",
      "bg-transparent text-gray-600 hover:bg-rose-100 focus:ring-rose-400 rounded-[5px]": variant === "ghost",

      // Sizes
      "px-5 py-2 text-base": size === "lg",
      "px-4 py-2 text-sm": size === "md",
      "px-3 py-1 text-xs": size === "sm",
      "w-10 h-10 flex items-center justify-center rounded-full": size === "icon",
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export { Button };
