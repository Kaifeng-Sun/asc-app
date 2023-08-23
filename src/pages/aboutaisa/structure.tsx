
import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Structure() {
  return (
    <>
      <PageTitle title="Our Governance Structure" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              > <br/>
                 In line with normal practices for an incorporated association, 
                  AISA’s activities on a day-to-day basis are governed by a Management Committee, 
                  which is elected by a majority vote by the members of the Association at its Annual 
                  General Meeting. The Management Committee is made up of occupants of the positions 
                  of President, Vice-President, Secretary and Treasurer, and six committee members.
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

export default Structure;
