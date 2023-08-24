import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Bridge() {
  return (
    <>
      <PageTitle title="Bridge" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              > <br/>
                 Bridge is one of the most engaging card games in the world, that is
                  mentally stimulating and universally played, and is one of the key
                  activities AISA supports. AISA Bridge sessions are held every week,
                  supplemented with periodic Play-n-Dine sessions.
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

export default Bridge;
