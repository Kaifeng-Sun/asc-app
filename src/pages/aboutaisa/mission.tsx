import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Mission() {
  return (
    <>
      <PageTitle title="Our Vision & Mission" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              >
                AISA&apos;s mission is to organise a variety of activities and
                events that benefit members&apos; physical and mental health and
                keep them socially engaged within the community and suitably
                informed about the topics of relevance to them. AISA&apos;S
                modus operandi is Mutual Help, guided by skilled volunteers from
                within the community, giving their time for the benefit of
                members with sincerity, integrity, and commitment.
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

export default Mission;
