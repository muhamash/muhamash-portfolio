"use client";

import Link from "next/link";

export default function SubRoutePanel({isOpen, subRoutes}) {
  return (
    <>
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
  )
}
