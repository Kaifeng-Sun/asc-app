import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Index() {
  return (
    <>
      <PageTitle title="NEWS AND FEATURES" />
      <Box h="200px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            <GridItem w="200%">
            <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              > 
                <br/>
                Notifications of forthcoming meetings and timetable of upcoming programs.
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

