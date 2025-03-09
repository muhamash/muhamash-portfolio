import { cn } from "@/utils/helper/helper";

const Badge = ({ variant = "default", className, children, ...props }) => {
  const badgeClasses = cn(
    "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-all cursor-pointer",
    {
      "bg-violet-500 text-white": variant === "default",
      "border border-gray-300 text-gray-600 hover:bg-gray-200": variant === "outline",
      "bg-green-600 text-white hover:bg-green-500": variant === "success",
      "bg-yellow-500 text-black hover:bg-yellow-400": variant === "warning",
      "bg-red-500 text-white hover:bg-red-400": variant === "danger",
    },
    className
  );

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export { Badge };