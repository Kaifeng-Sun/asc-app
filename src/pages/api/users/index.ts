import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/src/utils/db";
import User from "@/src/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await connect();
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  } else if (req.method === "POST") {
    try {
      await connect();
      const { title, content } = req.body;
      const user = new User({ title, content });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  }
}
