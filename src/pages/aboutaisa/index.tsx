import PageContent from "@/src/components/Template/PageContent";
import PageTitle, { PageItem } from "@/src/components/Template/PageTitle";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Spacer,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React from "react";

const pageItem: PageItem = {
  title: "About Aisa",
  content:
    "Australian Indian Seniors Association (AISA) is a not-for-profit association based in Victoria primarily focussed on the health and well-being of Indian seniors living in Victoria.",
};
function aboutAisa() {
  return (
    <>
      <PageTitle title={pageItem.title} content={pageItem.content}/>
      <PageContent title={pageItem.title} content={pageItem.content}/>
    </>
  );
}

export default aboutAisa;
