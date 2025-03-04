"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPage = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", page.toString());

    router.push(newUrl.toString());
    setCurrentPage(page);
  };

  if (totalPages === 1) return null;

  return (
    <motion.div
      className="mt-8 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isPending ? (
        <div className="flex justify-center items-center">
          <div className="loaderHast"></div>
        </div>
      ) : (
        <nav aria-label="Page navigation">
          <ul className="inline-flex items-center space-x-2">
            {/* Previous Button */}
            <li>
              <button
                onClick={() => startTransition(() => handlePageChange(currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Previous</span>
                &larr;
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => startTransition(() => handlePageChange(index + 1))}
                  className={`px-4 py-2 text-sm font-medium border transition-all ${
                    currentPage === index + 1
                      ? "bg-green-500 text-white border-green-500"
                      : "text-gray-600 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-800"
                  } rounded-lg focus:ring-2 focus:ring-green-400`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                onClick={() => startTransition(() => handlePageChange(currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Next</span>
                &rarr;
              </button>
            </li>
          </ul>
        </nav>
      )}
    </motion.div>
  );
}