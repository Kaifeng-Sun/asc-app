import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
} from "@chakra-ui/react";

import React from "react";

interface Props {
  title:string
}
function PageTitle( {title}:Props ) {
  return (
    <Box bg="#52a8de" h="200px" color="white" w="100%">
      <Flex>
        <Center w="500px" p="4" h="200px">
          <Text fontSize="5xl">{title}</Text>
        </Center>
        <Spacer></Spacer>
        <Center p="4" marginRight="80px">
          <Grid gap={4} templateRows="repeat(2, 1fr)">
            <GridItem colSpan={4} w="100%">
              <Button bg="#52a8de" color="white" border="1px">
                Donate
              </Button>
            </GridItem>
            <GridItem colSpan={4} w="100%">
              <Button bg="#52a8de" color="white" border="1px">
                Join Us
              </Button>
            </GridItem>
          </Grid>
        </Center>
      </Flex>
    </Box>
  );
}

export default PageTitle;
