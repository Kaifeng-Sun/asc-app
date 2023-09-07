import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import User from "@/src/models/User";
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;
      
      await connect();
      console.log(req.body);
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        fullName: name,
        email: email,
        password: hashedPassword,
      });

      return res.status(201).json({ message: "User registered" });
    } catch (error) {      
      return res
        .status(500)
        .json({ message: "An error occurred while registering the user." });
    }
  }
}
