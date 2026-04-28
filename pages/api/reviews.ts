import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/model/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { reviewerName, review, rating, bookId } = req.body;

  if (!reviewerName || !review || !rating || !bookId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const numericRating = Number(rating);
  const numericBookId = Number(bookId);

  if (numericRating < 1 || numericRating > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5" });
  }

  const createdReview = await prisma.bookReview.create({
    data: {
      reviewerName,
      review,
      rating: numericRating,
      bookId: numericBookId,
    },
  });

  return res.status(201).json(createdReview);
}