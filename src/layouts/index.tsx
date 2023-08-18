import { useRouter } from "next/router";
import { ReactNode } from "react";
import { PAGE_NOT_FOUND } from "../constants";
import { Box, Center, Image } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import WithSubnavigation from "../components/NavigationChakra";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  switch (router.pathname) {
    case PAGE_NOT_FOUND:
      return (
        <>
          <Header />
          <Box as="main">
            <WithSubnavigation />
            {children}
          </Box>
          <Footer />
        </>
      );

    default:
      return (
        <Box h="100hv">
          <Box
            width={["100%", "80%"]}
            minWidth="370px"
            mx="auto"
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            position="relative"
          >
            <Header />
            <Box as="main" flex="1" h="100%">
              <Center>
                <Image src="/headerlogo.png" h="160px" alt="Logo" />
              </Center>
              <WithSubnavigation />
              {children}
            </Box>
            <Footer />
          </Box>
          
        </Box>
      );
  }
};
export default Layout;
