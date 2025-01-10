import { client } from "@/sanity/lib/client";
import React from "react";
import BlogPostLayout1 from "../components/BlogCard1";
import BlogPostLayout2 from "../components/BlogCard2";
import BlogPostLayout3 from "../components/BlogCard3";
import Link from "next/link";

export default async function RecentBlogPosts() {
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
}[0..3]`;

  const posts: Post[] = await client.fetch(query);

  return (
    <>
      <main className="flex min-h-screen flex-col text-gray-800 dark:bg-zinc-950 dark:text-white bg-white">
        <h1 className="text-2xl font-bold uppercase my-12 mx-5 text-start dark:shadow-zinc-700 shadow-slate-400">
          Recent Blog Posts
        </h1>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-5">
          {/* Blog Post [0] - Left Side */}
          <div className="lg:row-span-2 lg:col-span-1">
            <Link href={`/RecentBlogPosts/${posts[0]?.slug}`}>
              <BlogPostLayout1 post={posts[0]} />
            </Link>
          </div>

          {/* Blog Posts [1] and [2] - Right Side */}
          <div className="flex flex-col gap-0 lg:col-span-1">
            {[posts[1], posts[2]].map(
              (post, index) =>
                post && (
                  <Link key={index} href={`/RecentBlogPosts/${post.slug}`}>
                    <BlogPostLayout2 post={post} />
                  </Link>
                )
            )}
          </div>

          {/* Blog Post [3] - Full-Width Below */}
          <div className="lg:col-span-2">
            <Link href={`/RecentBlogPosts/${posts[3]?.slug}`}>
              <BlogPostLayout3 post={posts[3]} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
