import PageTitle, {  } from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function ourImpact() {
    return (
        <>
          <PageTitle title="Our Impact" />
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
                    Health and Fitness are the key areas of AISA's focus, which is about
                    achieving a state of complete physical, mental and social well-being in
                    a person. The steps one can take to improve this feeling of well-being
                    include not only keeping physically and mentally active but also
                    remaining socially connected with others. AISA plays its part by
                    conducting a range of activities for its members, including regular
                    sessions in health education; exercises, sports and indoor games; social
                    get-togethers interspersed with entertainment activities; outdoor
                    picnics and trips; and culturally vibrant functions and events. 
                    <br/><br/>
                    The Association invests in these activities and events in the firm belief
                    that by embracing an active lifestyle in socially stimulating settings
                    our seniors would continue to enhance their physical and mental health
                    and the feeling of overall well-being.
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

export default ourImpact;
