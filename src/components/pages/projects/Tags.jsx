"use client"

import { motion } from "framer-motion";
import { useState } from "react";

const tags = [
  "All", "React.js", "Next.js", "Tailwind", "Node.js", "NestJS",
  "MySQL", "Prisma", "GraphQL", "PostgreSQL", "MongoDB", "Express.js"
];

const TagBar = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    if (tag === "All") {
      setSelectedTags(selectedTags.includes("All") ? [] : ["All"]);
    } else {
      setSelectedTags((prev) => {
        if (prev.includes("All")) {
          return [tag];
        }
        return prev.includes(tag)
          ? prev.filter((t) => t !== tag)
          : [...prev, tag];
      });
    }
  };

  return (
    <motion.div 
      className="w-full flex items-center justify-center flex-wrap gap-5 p-4  shadow-md bg-gradient-to-r from-cyan-900 via-teal-600 via-sky-900 via-violet-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    > 
      {tags.map((tag, index) => (
        <motion.p
          key={index}
          onClick={() => toggleTag(tag)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-2 rounded-lg cursor-pointer transition transform duration-300 ease-in-out font-outfit ${
            selectedTags.includes(tag) 
              ? "bg-green-600 text-violet-100" 
              : "bg-gray-200 text-gray-800 hover:bg-slate-500 hover:text-white"
          }`}
        >
          {tag}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default TagBar;