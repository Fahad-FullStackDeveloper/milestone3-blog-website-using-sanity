import ReviewPage from "@/app/components/Reviews";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slugQuery = `*[_type == "post" && slug.current == $slug][0]{
    mainImage,
    "author": author-> {name, "image": image.asset},
    publishedAt,
    title,
    summary,
    category1,
    category2,
    category3,
    "slug": slug.current,
    "bodyText": pt::text(body),
  }`;

  const post: Post | null = await client.fetch(slugQuery, {
    slug: params.slug,
  });

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen text-gray-800 bg-white dark:bg-zinc-950 dark:text-white ">
      <article className="px-5 py-12">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        {/* Author and Published Date */}
        <p className="text-sm text-gray-500 mb-4">
          By {post.author.name} on{" "}
          {new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(new Date(post.publishedAt))}
        </p>
        
        {/* Blog Image */}
        <Image
          src={urlForImage(post.mainImage).url()}
          alt={post.title}
          width={800}
          height={400}
          className="my-6 w-full object-cover rounded-lg"
        />
        
        {/* Blog Summary */}
        <p className="text-lg mb-6">{post.summary}</p>
        
        {/* Categories */}
        <div className="flex gap-4">
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            {post.category1}
          </span>
          <span className="bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded">
            {post.category2}
          </span>
          <span className="bg-red-200 text-red-800 text-sm font-medium px-3 py-1 rounded">
            {post.category3}
          </span>
        </div>

        {/* Body Text */}
        <p className="text-lg mt-20">{post.bodyText}</p>
      </article>
      <ReviewPage />
    </main>
  );
}
