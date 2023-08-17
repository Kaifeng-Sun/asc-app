import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { PageItem } from "./PageTitle";

function PageContent({ content }: PageItem) {
  return (
    <Box h="300px">
      <Center>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <GridItem w="100%">
            <Text
              fontSize="2xl"
              maxH="300px"
              overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
            >
              {content}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Image alt="" src="/aisalogo.png" maxH="300px" />
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}

export default PageContent;
