import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const db = await connectToDatabase();

  // Create the users collection and insert initial data

  try {
    const db = await connectToDatabase();

    // Create a collection (table) named "users"
    await db.createCollection("users");
    await db.collection("users").insertMany([
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
      },
    ]);
    res.status(201).json({ message: "Collection created successfully!" });
  } catch (error:any) {
    console.error("Error creating collection:", error.message);
    res.status(500).json({ error: "Failed to create collection." });
  }
}
