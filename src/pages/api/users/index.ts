import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest, res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const db = await connectToDatabase();

    const users = await db.collection('users').find({}).toArray();

    res.status(200).json(users);
  } catch (error:any) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
}
