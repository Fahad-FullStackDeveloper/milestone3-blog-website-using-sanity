// pages/api/reviews.ts
import { NextApiRequest, NextApiResponse } from "next";

// Mock database for reviews (temporary in-memory storage)
const reviews: Array<{ name: string; comment: string; rating: number }> = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Handle review submission
    const { name, comment, rating } = req.body;

    if (!name || !comment || rating === undefined) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Add new review to mock database
    const newReview = { name, comment, rating };
    reviews.push(newReview);

    return res.status(201).json({ message: "Review submitted successfully!", newReview });
  }

  if (req.method === "GET") {
    // Return list of all reviews
    return res.status(200).json({ reviews });
  }

  // Handle unsupported methods
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
