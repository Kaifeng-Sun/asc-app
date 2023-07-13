import { useRouter } from "next/router";
import { ReactNode } from "react";
import { PAGE_NOT_FOUND } from "../constants";
import { Box, Center } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  switch (router.pathname) {
    case PAGE_NOT_FOUND:
      return (
        <>
          <Header />
          <Box as="main">
            <NavigationBar />
            {children}
          </Box>
          <Footer />
        </>
      );

    default:
      return (
        <Center>
          <Box width="80%">
            <Header />
            <Box as="main">
              <NavigationBar />
              {children}
            </Box>
            <Footer />
          </Box>
        </Center>
      );
  }
};
export default Layout;
