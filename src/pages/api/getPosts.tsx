import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export async function getStaticeProps() {
  const result = await client.query({
    query: gql`
      query GetWordPressPosts {
        pages {
          nodes {
            title
            content
            uri
            date
          }
        }
      }
    `,
  });
  console.log(result);

  return { props: {
    posts: result.data.pages.nodes
  }}
}
