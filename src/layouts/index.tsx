import { useRouter } from "next/router";
import { ReactNode } from "react";
import { PAGE_NOT_FOUND } from "../constants";
import { Box, Center } from "@chakra-ui/react";
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
        <Center>
          <Box width="80%">
            <Header />
            <Box as="main">
              <WithSubnavigation />
              {children}
            </Box>
          </Box>
          <Footer />
        </Center>
      );
  }
};
export default Layout;
