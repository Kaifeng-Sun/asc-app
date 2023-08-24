import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Culture() {
  return (
    <>
      <PageTitle title="Cultural functions" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              > <br/>
                   Friendship Dinners and Cultural Events.
                 <br/> <br/>
                 Occasionally, depending upon member demand, AISA organises &apos;friendship
                  dinners&apos; where members can enjoy one another&apos;s company in smaller, cosy,
                  settings.
                  <br/><br/>
                  AISA also conducts two major cultural functions in a year, namely Holi
                  and Diwali, normally held around March and October timeframes
                  respectively. They usually attract larger attendances, and typically
                  involve a variety cultural-cum-entertainment program followed by a
                  three-course meal.
                  <br/><br/>
                  AISA&apos;s outdoor programs, such as picnics and day-trips, are important
                  activities that get members out of their usual routines to enjoy nature
                  or stimulating outdoor activities in the company of their
                  community-friends. Held between two and four times in a year, these
                  programs are well patronised by the members.
                <br/>
                Members can participate in any of these activities by contacting the
                relevant co-ordinators. Further details regarding the activities and the
                co-ordinators are included in the attached Updated &apos;AISA Activities
                Schedule&apos;. Attach AISA Activities Schedule
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

export default Culture;
