import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const db = await connectToDatabase();

  const { name, email } = req.body;

  const user = { name, email };

  await db.collection("users").insertOne(user);

  res.status(201).json(user);
}
