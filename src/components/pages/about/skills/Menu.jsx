"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = {
  Frontend: ["React.js", "Next.js", "Vue.js", "Svelte", "HTML", "Css"],
  Backend: ["Node.js", "Nest.js", "Express.js", "Django"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  DevOps: ["Docker", "Kubernetes", "CI/CD", "AWS"],
  Tools: ["ESLint", "Prettier", "Webpack", "Vite"],
  OS: ["Linux", "Windows", "MacOS", "Ubuntu"],
};

export default function DynamicMenu() {
  const [activeMenu, setActiveMenu] = useState("Frontend");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-4 justify-center bg-gray-600 backdrop-blur-sm bg-opacity-50  p-4 rounded-xl shadow-lg">
        {Object.keys(menuItems).map((menu) => (
          <button
            key={menu}
            className={`px-4 py-2 font-nunito rounded-lg text-white transition-all duration-200 ${
              activeMenu === menu ? "bg-violet-600 shadow-sm shadow-violet-300" : "bg-gray-700 hover:bg-gray-600 text-violet-100"
            }`}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full  bg-gray-600 backdrop-blur-sm bg-opacity-50 text-white p-3 rounded-lg text-center"
        >
          {activeMenu} ▼
        </button>
        {isDropdownOpen && (
          <div className="absolute w-full  bg-gray-600 backdrop-blur-sm bg-opacity-50 mt-2 rounded-lg shadow-lg z-10">
            {Object.keys(menuItems).map((menu) => (
              <button
                key={menu}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                onClick={() => {
                  setActiveMenu(menu);
                  setIsDropdownOpen(false);
                }}
              >
                {menu}
              </button>
            ))}
          </div>
        )}
      </div>

      <motion.div
        key={activeMenu}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 p-4  bg-gray-600 backdrop-blur-sm bg-opacity-50 text-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-bold pb-3 font-edu text-violet-100 text-center">{activeMenu} Technologies</h2>
        <ul className="grid grid-cols-2 gap-3 font-outfit">
          {menuItems[activeMenu].map((item) => (
            <li
              key={item}
              className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}