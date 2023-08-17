import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

export const FooterContent = `&copy; ${new Date().getFullYear()} Aisa Seniors. All rights reserved.`;

const Footer = () => {
  return (
    <>
      <Box h="30px" bg={"#25336f"} position="absolute" bottom="0" width="100%">
          <Center
            as="footer"
            bottom="0"
            justifyContent="center"
            opacity={0.4}
            fontSize="sm"
            color="white"
          >
            {FooterContent}
          </Center>
      </Box>
    </>
  );
};

export default Footer;
