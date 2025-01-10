import React, { useState, useEffect } from "react";
import { Sun, Moon } from "phosphor-react";

const ViewMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Update the class on the body element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="flex items-center space-x-2 p-1 bg-zinc-50 rounded-full boarder border-gray-300  dark:bg-zinc-800 shadow-sm shadow-slate-400">
        {/* Icon for Current Mode */}
        {darkMode ? (
          <Moon
            size={24}
            weight="bold"
            className="text-zinc-800 dark:text-white"
          />
        ) : (
          <Sun size={24} weight="bold" className="text-amber-400" />
        )}
        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center w-8 h-4 rounded-full bg-gray-400 dark:bg-gray-100 relative transition-colors duration-300"
        >
          <span className="sr-only">.</span>
          <span
            className={`w-4 h-4 bg-purple-800 dark:bg-purple-800 rounded-full shadow-md dark:shadow-md dark:shadow-gray-0 transform transition-transform duration-300 ${
              darkMode ? "translate-x-2" : "-translate-x-2"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ViewMode;
