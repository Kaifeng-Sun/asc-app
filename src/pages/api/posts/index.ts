import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/src/utils/db";
import Post from "@/src/models/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await connect();
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  } else if (req.method === "POST") {
    try {
      await connect();
      const { title, content } = req.body;
      const post = new Post({ title, content });
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  }
}
