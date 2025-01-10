'use client';
import { useState } from "react";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number | "">("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = { name: userName, comment, rating: rating || 5 };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setUserName("");
    setComment("");
    setRating("");
  };

  return (
    <section className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>

      {/* Review Submission Form */}
      <form onSubmit={handleReviewSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
          required
        />

        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-md resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
          rows={3}
          required
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value) || "")}
          className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-pointer focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select a Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <button
          type="submit"
          className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Submit Review
        </button>
      </form>

      {/* Display Submitted Reviews */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">User Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <h4 className="font-bold">{review.name}</h4>
              <p>{review.comment}</p>
              <span className="text-yellow-500">
                {"★".repeat(review.rating)}
              </span>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </div>
    </section>
  );
}
