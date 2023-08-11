import { Box, Center } from "@chakra-ui/react";

export const FooterContent = `&copy; ${new Date().getFullYear()} MyCharity. All rights reserved.`;

const Footer = () => {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom="0"
      display="flex"
      justifyContent="center"
      opacity={0.4}
      fontSize="sm"
      backgroundColor="grey"
      color="black"
    >
      {FooterContent}
    </Box>
  );
};

export default Footer;
