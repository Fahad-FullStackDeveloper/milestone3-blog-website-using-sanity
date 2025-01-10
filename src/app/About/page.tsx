import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-gray-800 dark:text-white px-6 py-16">
      <section className="max-w-5xl mx-auto">
        {/* About Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        {/* Intro Section */}
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12">
          Welcome to our blog! We are passionate storytellers, tech enthusiasts,
          and creatives on a mission to share knowledge and inspiration with the
          world. Our aim is to provide insightful articles, tutorials, and
          stories that make a difference.
        </p>

        {/* Team Image and Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <Image
            src="/blogging-concept-web-blog-social-600nw-2484136087.jpg" // Replace with your image path
            alt="Our Team"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />

          {/* Team Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="text-md text-gray-700 dark:text-gray-300">
              Our blog brings together experts and enthusiasts from diverse
              fields such as technology, design, and storytelling. We aim to
              provide fresh perspectives and valuable insights to our readers.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300">
              {`Whether you are a tech-savvy professional or a curious learner, you'll find something for yourself here. We constantly evolve to deliver high-quality content that inspires and educates.`}
            </p>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mt-16 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-md text-gray-700 dark:text-gray-300">
              To empower individuals and communities by providing them with
              knowledge, insights, and stories that foster growth, creativity,
              and understanding.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-md text-gray-700 dark:text-gray-300">
              To become a go-to platform for readers seeking inspiration,
              learning, and meaningful conversations about technology,
              creativity, and modern life.
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-md text-gray-700 dark:text-gray-300 mb-6">
            We invite you to be part of our growing community. Stay connected,
            share your thoughts, and explore the endless possibilities with us.
          </p>
          <button className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
