import PageTitle, {  } from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const pageItem = {
  title: "About Aisa",
  content:
    "Australian Indian Seniors Association (AISA) is a not-for-profit association based in Victoria primarily focussed on the health and well-being of Indian seniors living in Victoria.",
};
function aboutAisa() {
  return (
    <>
      <PageTitle title={pageItem.title}/>
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH={200}
                overflowY={pageItem.content.length > 200 ? "scroll" : "auto"}
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

export default aboutAisa;
