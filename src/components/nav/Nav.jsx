"use client"; // Required for Framer Motion in Next.js 15+
import { FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";
import { NavItem } from "./NavItems";

export default function Nav() {
  return (
    <nav className="fixed top-50 left-50 w-full flex items-center justify-center z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 backdrop-blur-lg bg-gradient-to-r from-gray-900/50 to-gray-700/30 border-b border-white/10 shadow-md shadow-slate-700 rounded-[50px]">
        <div className="flex justify-center items-center py-4">
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <NavItem icon={<FaHome />} text="Home" />
            <NavItem icon={<FaUser />} text="About" />
            <NavItem icon={<FaEnvelope />} text="Contact" />
            <NavItem icon={<FaFolderOpen  />} text="Settings" />
          </ul>
        </div>
      </div>
    </nav>
  );
}