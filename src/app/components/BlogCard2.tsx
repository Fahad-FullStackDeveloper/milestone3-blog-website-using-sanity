import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

export default function BlogPostLayout2({ post }: { post: Post }) {
  return (
    <div className="m-2 bg-white hover:bg-gray-200 border border-purple-600 shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-600 transition-shadow duration-300 ease-in-out transform hover:scale-105 dark:text-white dark:bg-gray-800 dark:border-purple-600 dark:hover:bg-gray-950">
      {/* Blog Card Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Blog Image */}
        <Image
          src={urlForImage(post.mainImage).url()}
          alt="Blog Image"
          width={600}
          height={600}
          className="object-cover md:w-2/5 w-full h-48 md:h-auto"
        />

        {/* Blog Content */}
        <div className="p-4 flex flex-col justify-between w-full">
          {/* Author and Date */}
          <div className="flex items-center mb-4">
            <Image
              src={urlForImage(post.author.image).url()}
              alt="Author"
              width={100}
              height={100}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="ml-3">
              <h3 className="text-xs font-semibold text-purple-600">
                {post.author.name}
              </h3>
              <span className="text-xs text-purple-600">
                {new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(post.publishedAt))}
              </span>
            </div>
          </div>

          {/* Blog Title */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white cursor-pointer">
              {post.title}
            </h2>
            {/* Read More Dynamic Link Icon */}
            <div className="text-blue-600 flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#8b2a5e"
                viewBox="0 0 256 256"
              >
                <path d="M222,104a6,6,0,0,1-12,0V54.49l-69.75,69.75a6,6,0,0,1-8.48-8.48L201.51,46H152a6,6,0,0,1,0-12h64a6,6,0,0,1,6,6Zm-38,26a6,6,0,0,0-6,6v72a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,80V208a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V136A6,6,0,0,0,184,130Z"></path>
              </svg>
            </div>
          </div>

          {/* Blog Summary */}
          <p className="text-xs text-gray-700 dark:text-gray-400 mb-4">
            {post.summary}
          </p>

          {/* Blog Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
              {post.category1}
            </span>
            <span className="bg-green-200 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
              {post.category2}
            </span>
            <span className="bg-red-200 text-red-800 text-xs font-medium px-2.5 py-1 rounded">
              {post.category3}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
