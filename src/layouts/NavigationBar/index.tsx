import { Box, Center, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from 'next/image';
import NavigationItem from "./NavigationItem";
import Logo from "../../assets/aisalogo.png"
import { MenuListItem, menuListItems } from "./NavigationItemList";

const NavigationBar = () => {
  return (
    <>
      <Box>
        <Link href="/login">Log in</Link>
      </Box>

      <Box height="80px" backgroundColor={"grey"}>
        <Center>
          <Link href="./">
          <Image alt="" width={100} height={50} src='/aisalogo.png' />          </Link>

        </Center>
      </Box>

      <Flex justify={"space-between"}>
        {menuListItems.map((item: MenuListItem, index) => (
          <NavigationItem
            key={index}
            title={item.title}
            subMenu={item.subList}
            order={item.order}
          />
        ))}
      </Flex>
    </>
  );
};

export default NavigationBar;
