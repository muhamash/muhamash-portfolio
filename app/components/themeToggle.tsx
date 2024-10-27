'use client'
import React from 'react';
import { useTheme } from '../components/themeProvider.tsx';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded ${theme === 'light' ? 'bg-blue-500 text-black' : 'bg-gray-800 text-white'}`}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeToggle;