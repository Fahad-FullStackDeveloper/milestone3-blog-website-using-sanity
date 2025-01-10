"use client";
import { useState } from "react";

export default function ReviewPage() {
  // State for managing form data and reviews
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [reviews, setReviews] = useState([
    { name: "John Doe", text: "Amazing post! Very informative!" },
    { name: "Jane Smith", text: "I learned a lot from this article." },
  ]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && comments) {
      // Add the new review to the reviews state
      setReviews([...reviews, { name, text: comments }]);

      // Clear the form
      setName("");
      setEmail("");
      setComments("");
    }
  };

  return (
    <section className="mt-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-dark dark:text-light text-center">Reviews</h2>

      {/* Default Reviews */}
      <div className="space-y-6 mt-6 max-w-4xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-dark dark:text-light">{review.text}</p>
            <p className="text-sm text-dark/80 dark:text-light/80">- {review.name}</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <form className="mt-8 space-y-4 max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-dark dark:text-light">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-accent focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-dark dark:text-light">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-accent focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="comments" className="text-sm font-medium text-dark dark:text-light">Comments</label>
          <textarea
            id="comments"
            name="comments"
            rows={4}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-accent focus:outline-none"
            placeholder="Enter your comments"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white rounded-lg font-bold focus:outline-none bg-yellow-400 hover:bg-yellow-500"
        >
          Submit Review
        </button>
      </form>
    </section>
  );
}