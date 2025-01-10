'use client';
import { useState } from "react";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

export default function ReviewSection() {
  // Local state for reviews and form input
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number | "">("");

  // Handle form submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new review object
    const newReview: Review = { name: userName, comment, rating: rating || 5 };

    // Update reviews list
    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Clear form fields
    setUserName("");
    setComment("");
    setRating("");
  };

  return (
    <section className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>

      {/* Review Submission Form */}
      <form onSubmit={handleReviewSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />

        {/* Comment Input */}
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-md"
          rows={3}
          required
        />

        {/* Rating Input */}
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value) || "")}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="">Select a Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-4 bg-purple-600 text-white rounded-md"
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
