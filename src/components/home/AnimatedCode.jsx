"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const codeSnippet = `
import React from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl text-cyan-400">Hello, Next.js!</h1>
      <button 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default MyComponent;
`;

export default function CodeEditor() {
  const [codeIndex, setCodeIndex] = useState(0); 
  const [blink, setBlink] = useState(true); 
  const containerRef = useRef(null);

  useEffect(() => {
    // Cursor blinking control
    const cursorBlink = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    if (codeIndex < codeSnippet.length) {
      const timeout = setTimeout(() => setCodeIndex(codeIndex + 1), 50);
      return () => clearTimeout(timeout);
    } else {
      // Reset codeIndex to create infinite typing loop
      const timeout = setTimeout(() => setCodeIndex(0), 1000); 
      return () => clearTimeout(timeout);
    }
  }, [codeIndex]);

  useEffect(() => {
    // Auto-scrolling when new code is revealed
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [codeIndex]);

  const highlightCode = (text) => {
    // First escape HTML entities
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Then apply syntax highlighting
    return escaped
      .replace(/"([^"]*)"/g, "<span class='text-red-400'>\"$1\"</span>")
      .replace(/(className)=/g, "<span class='text-green-400'>$1</span>=")
      .replace(/(import|from|const|return|function|export|default)/g, "<span class='text-purple-400'>$1</span>")
      .replace(/(useState)/g, "<span class='text-blue-400'>$1</span>")
      .replace(/(&lt;.*?&gt;)/g, "<span class='text-cyan-400'>$1</span>")
      .replace(/([{}])/g, "<span class='text-yellow-400'>$1</span>");
  };

  return (
    <div className="relative p-6 md:w-[420px] w-[300px] bg-gray-800 rounded-lg shadow-md h-96 overflow-hidden">
      <div
        className="h-full overflow-y-auto"
        ref={containerRef}
      >
        <div className="text-sm font-mono text-gray-300">
          <motion.pre
            className="whitespace-pre-wrap break-words"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <code>
              <div
                dangerouslySetInnerHTML={{
                  __html: highlightCode(codeSnippet.substring(0, codeIndex)),
                }}
              />
              <span
                className={`ml-1 inline-block h-4 w-[2px] bg-cyan-400 align-middle ${
                  blink ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ verticalAlign: 'text-top' }}
              />
            </code>
          </motion.pre>
        </div>
      </div>
    </div>
  );
}