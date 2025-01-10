import { client } from "@/sanity/lib/client";
import React from "react";
import BlogCard from "../components/BlogCard1";
import Link from "next/link";
import ReviewSection from "../components/Reviews";

export default async function AllBlogPosts() {
  const query = `*[_type == "post"] | order(_createdAt asc){
 mainImage,
 "author":author-> {name, "image":image.asset},
 publishedAt,
 title,
 summary,
 category1,
 category2,
 category3,
 "slug": slug.current,
}[4..9]`;

  const posts: Post[] = await client.fetch(query);

  return (
    <>
      <main className="flex min-h-screen flex-col text-gray-800 dark:bg-zinc-950 dark:text-white bg-white">
        <h1 className="text-2xl font-bold uppercase my-12 mx-5 text-start dark:shadow-zinc-700 shadow-slate-400">
          All Blog Posts
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {posts.map((post: Post) => (
            <Link key={post._id} href={`/AllBlogPosts/${post.slug}`}>
              <BlogCard post={post} />
            </Link>
          ))}
        </section>
        <Link href="/Blog" className="flex justify-center">
          <button className="my-12 mx-5 w-60 text-center hover:lg:scale-105 bg-white dark:bg-gray-950 border-purple-500 border hover:bg-purple-600 dark:hover:bg-purple-600 dark:text-white font-bold py-2 px-4 rounded-full">
            All Blog Posts
          </button>
        </Link>
        <ReviewSection />
      </main>
    </>
  );
}
