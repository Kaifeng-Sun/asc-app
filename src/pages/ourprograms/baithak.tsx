import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Baithak() {
  return (
    <>
      <PageTitle title="Baithak" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              > <br/>
                Baithak is an Indian word meaning a get-together or meeting of people,
                usually in indoor settings, for chit-chat, discussion or a friendly
                activity. AISA holds baithaks every Monday at Brandon Park Community
                Centre, Glen Waverley, to facilitate social interaction and improved
                connectedness amongst its members. Every baithak session is held
                interspersed with a pre-defined theme activity, which varies from week
                to week. 
                <br/> <br/> The sessions usually starts with an hour of Chair Exercises,
                followed by the theme activity, and then winding down with lunch and
                chit-chat. The theme activities typically include Sangeet,
                Documentaries, Bingo, or Talks and Discussion. On every 5th Monday, if
                there is one in a month, a Community Lunch is arranged, together with
                either a presentation on an informative topic or a free-flowing program.
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

export default Baithak;
