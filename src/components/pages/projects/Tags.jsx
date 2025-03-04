"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const tags = [
  "All", "React.js", "Next.js", "Tailwind", "Node.js", "NestJS",
  "MySQL", "Prisma", "GraphQL", "PostgreSQL", "MongoDB", "Express.js"
];

const TagBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get tags from URL and parse them into an array
  const urlTags = searchParams.get("tags")?.split(",") || [];
  const [selectedTags, setSelectedTags] = useState(urlTags);

  useEffect(() => {
    setSelectedTags(urlTags);
  }, [searchParams]);

  const updateURL = (updatedTags) => {
    const newUrl = new URL(window.location.href);
    
    if (updatedTags.length === 0 || updatedTags.includes("All")) {
      newUrl.searchParams.set( "tags", "" );
      newUrl.searchParams.set("page", "1");
    } else {
      newUrl.searchParams.set( "tags", updatedTags.join( "," ) );
      newUrl.searchParams.set("page", "1");
    }

    router.push(newUrl.toString(), { scroll: false });
  };

  const toggleTag = (tag) => {
    let updatedTags;

    if (tag === "All") {
      updatedTags = selectedTags.includes("All") ? [] : ["All"];
    } else {
      updatedTags = selectedTags.includes("All") ? [tag] :
        selectedTags.includes(tag)
          ? selectedTags.filter((t) => t !== tag)
          : [...selectedTags, tag];
    }

    setSelectedTags(updatedTags);
    updateURL(updatedTags);
  };

  return (
    <motion.div 
      className="w-full flex items-center justify-center flex-wrap gap-3 p-4 shadow-sm bg-gradient-to-r from-gray-900 via-teal-900 to-sky-900"
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
          className={`px-4 py-2 rounded-lg cursor-pointer transition transform duration-300 ease-in-out font-medium ${
            selectedTags.includes(tag) || (tag === "All" && selectedTags.length === 0)
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-500 hover:text-white"
          }`}
        >
          {tag}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default TagBar;