import NextAuth from "next-auth"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import type { Adapter } from "next-auth/adapters";
import { v4 as uuidv4 } from 'uuid';

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
        profile(profile: GoogleProfile) {
          return {
            firstName: profile.given_name,
            lastName: profile.family_name,
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            password: null,
          };
        },
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username:",
            type: "text",
            placeholder: "Enter your email",
          },
          password: {
            label: "Password:",
            type: "password",
            placeholder: "Enter your password",
          },
        },
        async authorize(credentials) {
          const user = { id: "42", name: "Dave", password: "nextauth" };
  
          if (
            credentials?.username === user.name &&
            credentials?.password === user.password
          ) {
            return user;
          } else {
            return null;
          }
        },
      }),
    ],
  });