"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SubRoutePanel from "./SubRoutePanel";

const NavItem = ({ icon, text, subRoutes = [] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const url = `/${text.toLowerCase()}`;
  const isActive = pathname === url;
  const [ isOpen, setIsOpen ] = useState( false );

  // console.log(subRoutes)

  return (
    <div className="relative">
      {/* Single Route (if no subRoutes) */}
      {subRoutes.length === 0 ? (
        <Link
          href={url}
          className={`flex items-center gap-2 font-medium cursor-pointer transition-all duration-300 ${
            isActive ? "text-green-600" : "text-white"
          }`}
        >
          {icon}
        </Link>
      ) : (
        /* Dropdown for Subroutes */
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 font-medium cursor-pointer transition-all duration-300 ${
              isActive ? "text-green-600" : "text-white"
            }`}
          >
            {icon} <FaChevronDown className="text-xs" />
          </button>

          {/* Subroute Panel */}
          <SubRoutePanel isOpen={isOpen} subRoutes={subRoutes}/>
        </>
      )}
    </div>
  );
}

export default NavItem;