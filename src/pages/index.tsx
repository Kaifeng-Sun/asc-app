import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";
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
      {posts.map(({ title, content, slug, date }) => {
        return (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              [{date}] {title}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetWordPressHomePageAndPosts {
        posts {
          nodes {
            title
            content
            slug
            date
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: result.data.posts.nodes,
    },
  };
}
