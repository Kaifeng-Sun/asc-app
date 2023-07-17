import { gql } from '@apollo/client';
import Link from 'next/link';
import { client } from '../../../lib/apollo';
import Layout from '@/src/layouts';

interface Post {
    title: string;
    content: string;
    uri: string;
    date: string;
  }
  
  interface BlogProps {
    post: Post;
  }

export default function BlogPage({ post }:BlogProps) {
  console.log(post);
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link href="/">
        &larr; back to home
      </Link>
    </>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query GetWordPressPosts {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: result.data.posts.nodes.map(({ slug }: { slug: string }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  console.log(params);
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetWordPressPostBySlug($slug: String!) {
        postBy(slug: $slug) {
          title
          content
        }
      }
    `,
    variables: { slug },
  });

  return {
    props: {
      post: result.data.postBy,
    },
  };
}