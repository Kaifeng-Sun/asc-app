import PageTitle from "@/src/components/Template/PageTitle";
import React from "react";
import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";

function Special() {
  return (
    <>
      <PageTitle title="Special-purpose initiatives" />
      <Box h="300px">
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text
                fontSize="2xl"
                maxH="300px"
                overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
              > <br/>
                    AISA has also introduced several special-purpose initiatives to address
                    the needs of its members. Activities relating to these initiatives are
                    held periodically as per the requirements of specific interest groups.
                 <br/> <br/>
                    • Legal Clinic (pro bono), held monthly with prior bookings at Wadham
                    House Community Activity Centre, to enable members to obtain preliminary
                    legal opinion on any legal matters of concern to them in one-on-one
                    meetings from an in-house practising lawyer.
                  <br/><br/>
                    • Health Seminars, held periodically in the form of a presentation,
                    followed by a Q&A session, to exchange useful information on topics of
                    health specifically relevant for the seniors.
                  <br/><br/>
                    • AISA Women&apos;s Forum, under trial at present and in the process of more
                    fully defined, is aimed at activities of specific interest to, and run
                    by, AISA&apos;s women members. Currently, as part of this initiat&apos;ve, &apos;women
                    only&apos;apos; fitness sessions are being held every week at Brandon Park
                    Community Centre.
                
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

export default Special;
