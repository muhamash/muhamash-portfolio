"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SubRoutePanel from "./SubRoutePanel";

const NavItem = ({ icon, text, subRoutes = [] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const url = `/${text.toLowerCase()}`;
  const isActive = pathname === url;
  const linkRef = useRef( null );
  const [ isOpen, setIsOpen ] = useState( false );

  useEffect( () =>
  {
    function handleClickOutside ( event )
    {
      if ( linkRef.current && !linkRef.current.contains( event.target ) )
      {
        setIsOpen( false );
      }
    }

    document.addEventListener( "mousedown", handleClickOutside );
    return () =>
    {
      document.removeEventListener( "mousedown", handleClickOutside );
    };
  }, [] );

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
        <div ref={linkRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 font-medium cursor-pointer transition-all duration-300 ${
              isActive ? "text-green-600" : "text-white"
            }`}
          >
              { icon } <span className={ `${isOpen ? "rotate-180 duration-300 transition-all" : "rotate-0 duration-300 transition-all"}` }>
                <FaChevronDown className="text-xs" />
           </span>
          </button>

          {/* Subroute Panel */}
          <SubRoutePanel isOpen={isOpen} setIsOpen={setIsOpen} subRoutes={subRoutes}/>
        </div>
      )}
    </div>
  );
}

export default NavItem;