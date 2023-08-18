import Link from "next/link";
import PageTitle from "../components/Template/PageTitle";
import { Box, Center, Grid, GridItem, Text, Image } from "@chakra-ui/react";

interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
}

interface HomeProps {
  posts: Post[];
}
const pageItem = {
  title: "About Aisa",
  content:
    "Australian Indian Seniors Association (AISA) is a not-for-profit association based in Victoria primarily focussed on the health and well-being of Indian seniors living in Victoria.",
};
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <PageTitle title={"Home"}/>
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH={200}
                overflowY={"auto"}
              >
                {pageItem.content}
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Image alt="" src="/aisalogo.png" maxH="300px" />
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </>
  );
}

