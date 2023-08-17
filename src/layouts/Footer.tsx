import { Box, Center } from "@chakra-ui/react";

export const FooterContent = `&copy; ${new Date().getFullYear()} Aisa Seniors. All rights reserved.`;

const Footer = () => {
  return (
    <>
      <Box 
        h="30px" 
        bg={"#25336f"} 
        position="absolute" 
        bottom="0" 
        width="80%"
      >
        <Center
          as="footer"
          justifyContent="center"
          fontSize="sm"
          color="white"
          width="100%"
          p="2"
        >
          {FooterContent}
        </Center>
      </Box>
      <Box pb="30px"></Box>
    </>
  );
};

export default Footer;
