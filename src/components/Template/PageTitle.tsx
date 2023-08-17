import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
} from "@chakra-ui/react";

import React from "react";

export interface PageItem {
  title: string;
  content: string;
}

function PageTitle({ title }: PageItem) {
  return (
    <Box bg="#25336f" maxW="1200px" h="200px" color="white">
      <Flex>
        <Center w="500px" p="4" h="200px">
          <Text fontSize="5xl">{title}</Text>
        </Center>
        <Center p="4">
          <Grid gap={4} templateRows="repeat(2, 1fr)">
            <GridItem colSpan={4} w="100%">
              <Button bg="#25336f" color="white" border="1px">
                Donate
              </Button>
            </GridItem>
            <GridItem colSpan={4} w="100%">
              <Button bg="#25336f" color="white" border="1px">
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
