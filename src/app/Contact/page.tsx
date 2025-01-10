import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-gray-800 dark:text-white px-6 py-16">
      <section className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-10 text-center">Get in Touch</h1>

        {/* Contact Info and Form Container */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p>
              Feel free to reach out by filling out the form or through the
              following channels:
            </p>
            <div className="space-y-4">
              <p>
                📧 <span className="font-medium">Email:</span>
                <a
                  href="mailto:contact@yourdomain.com"
                  className="text-purple-600 hover:underline"
                >
                  contact@yourdomain.com
                </a>
              </p>
              <p>
                📞 <span className="font-medium">Phone:</span> +123 456 7890
              </p>
              <p>
                🌐 <span className="font-medium">Website:</span>
                <a
                  href="https://yourdomain.com"
                  className="text-purple-600 hover:underline"
                >
                  www.yourdomain.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="#"
            method="POST"
            className="bg-gray-100 dark:bg-zinc-800 p-8 rounded-lg shadow-md"
          >
            <label className="block mb-4">
              <span className="block text-sm font-medium">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700"
                placeholder="Your Full Name"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700"
                placeholder="you@example.com"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700"
                placeholder="Write your message here..."
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
