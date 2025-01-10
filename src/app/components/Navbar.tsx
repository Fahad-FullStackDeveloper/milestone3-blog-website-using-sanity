"use client";
import React from "react";
import Link from "next/link";
import ViewMode from "./ViewMode";

const Navbar = () => {
  return (
    <>
      <nav className="relative top-0 left-0 z-50 w-full bg-white text-gray-700 shadow dark:bg-zinc-950 dark:text-white dark:shadow-zinc-700">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <Link href="/" className="flex space-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="dark:fill-white fill-black"
              >
                <path d="M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"></path>
              </svg>
            </div>
            <div className="text-3xl font-bold text-purple-700 dark:text-white -py-4 font-sans">
              Your Brand
            </div>
          </Link>

          {/* Mobile Menu */}
          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-zinc-950 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:underline md:mx-4 md:my-0"
                href="/"
              >
                Home
              </Link>
              <Link
                className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:underline md:mx-4 md:my-0"
                href="/Blog"
              >
                Blog
              </Link>
              <Link
                className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:underline md:mx-4 md:my-0"
                href="/Contact"
              >
                Contact
              </Link>
              <Link
                className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:underline md:mx-4 md:my-0"
                href="/About"
              >
                About
              </Link>
            </div>
            <ViewMode />
            
          </div>
        </div>
      </nav>

      {/* Add margin to prevent overlapping content */}
    </>
  );
};

export default Navbar;
