import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function History() {
  return (
    <>
      <PageTitle title="Our History" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="200%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              >
                  AISA was registered as an incorporated association on 22 November 2019,
                  although its formation has evolved from a small number of informal
                  groups of Indian Seniors undertaking regular activities at Wadham House
                  Community Activity Centre, Mount Waverley, since 2016. These activities
                  included Table Tennis, Chair Exercise Classes, Bridge, and Social
                  Events, all conducted on self-funded basis. As interest in these
                  activities grew, the need to have larger, more suitable, premises became
                  obvious, which led to the establishment of AISA as a vehicle to seek
                  external funding and expand the range of activities offered. Since its
                  incorporation AISA has been quite successful in securing adequate
                  funding from various sources and, with volunteers’ support, expanding
                  the range and frequency of its activities. Its membership has also
                  continued to grow strongly and steadily during this period, despite the
                  fact that for almost two years of its initial existence as an
                  incorporated body it had to function under a COVID-ravaged environment
                  featuring repeated lockdowns and varying degrees of restrictions.
              </Text>
            </GridItem>
            {/* <GridItem w="100%">
              <Image alt="" src="/aisalogo.png" maxH="300px" />
            </GridItem> */}
          </Grid>
        </Center>
      </Box>
    </>
  );
}

export default History;
