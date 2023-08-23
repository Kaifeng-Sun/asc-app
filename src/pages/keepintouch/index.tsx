import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Index() {
  return (
    <>
      <PageTitle title="FEEDBACK & SUGGESTIONS" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              >
                <br/>
                As is true for anything in life, you get out of something as much as you
                put into it! AISA’s activities are there for its members to enjoy and
                are run entirely by volunteers who devote a lot of their time in making
                things happen. To keep these activities going, members’ enthusiastic and
                regular participation is essential, as are their contributions as
                volunteers wherever possible.
                <br/>
                Equally important is members’ feedback and suggestions for new ideas.
                Please feel free to fill out the following form with your input,
                indicating also whether you would be able to volunteer in running any of
                AISA’s activities.
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

export default Index;

