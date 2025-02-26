"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItem = ({ icon, text }) => {
  const pathname = usePathname();
  const url = `/${text.toLowerCase()}`;
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={`relative flex items-center font-medium cursor-pointer group ${
        isActive ? "text-green-600" : "text-white"
      }`}
    >
      {icon}
    </Link>
  );
};