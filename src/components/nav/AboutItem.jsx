"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import { FaBriefcase, FaGraduationCap, FaTools, FaTrophy, FaUser } from "react-icons/fa";

const NavItem = dynamic(() => import("./NavItems"));

export default function AboutItem() {
  const size = useWindowSize();
  const isMobile = size?.width < 767;

    return (
        <NavItem
            icon={ <FaUser /> }
            text="About"
            subRoutes={
                isMobile
                    ? [
                        { text: "Profile", url: "/about?view=profile", icon: <FaUser /> },
                        { text: "Experiences", url: "/about?view=experiences", icon: <FaBriefcase /> },
                        { text: "Educations", url: "/about?view=educations", icon: <FaGraduationCap /> },
                        { text: "Skills", url: "/about?view=skills", icon: <FaTools /> },
                        { text: "Achievements", url: "/about?view=achievements", icon: <FaTrophy /> },
                    ]
                    : []
            }
        />
    );
}