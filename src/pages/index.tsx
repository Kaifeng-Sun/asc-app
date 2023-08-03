import { gql } from "@apollo/client";
import Link from "next/link";

interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      123
    </>
  );
}

