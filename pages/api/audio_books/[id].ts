import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/model/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = Number(req.query.id);
  const { checkedOut } = req.body;

  const updatedCopy = await prisma.audioBookCopy.update({
    where: { id },
    data: { checkedOut },
  });

  res.status(200).json(updatedCopy);
}