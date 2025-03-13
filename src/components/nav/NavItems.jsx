"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NavItem = ({ icon, text, subRoutes = [] }) => {
  const pathname = usePathname();
  const url = `/${text.toLowerCase()}`;
  const isActive = pathname === url;
  const [ isOpen, setIsOpen ] = useState( false );
  // const router = useRouter

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
          {isOpen && (
            <ul className="absolute left-0 mt-3 w-40 bg-black  shadow-md text-white rounded-md p-2 transition-all duration-300 transform  origin-top">
              {subRoutes.map((sub) => (
                <li key={sub.text} className="flex items-center p-2 hover:bg-gray-800 rounded transition-all">
                  {sub.icon}
                  <Link
                    href={sub.url}
                    className={`ml-2 w-full `}
                    onClick={() => setIsOpen(false)}
                  >
                    {sub.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default NavItem;