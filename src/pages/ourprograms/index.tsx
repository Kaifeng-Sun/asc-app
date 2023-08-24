import PageTitle, {  } from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const pageItem = {
  title: "Our Programs",
  content:
    "AISA’s programs of regular and ad-hoc activities and events for the benefit of its members",
};

function Program() {
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
              > <br/>
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

export default Program;

