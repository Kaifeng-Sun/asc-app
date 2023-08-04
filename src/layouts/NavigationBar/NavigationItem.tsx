import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { MenuListSubItem } from "./NavigationItemList";
import { Link } from "@chakra-ui/next-js";

interface MenuProps {
  title: string;
  subMenu: MenuListSubItem[];
  order: number;
  url: string;
}
const NavigationItem: React.FC<MenuProps> = ({ title, subMenu, order, url }) => {
  return (
    <>
    <Menu key={order}>
      <MenuButton as={Button}>
        <Link href={url}>{title}</Link>
      </MenuButton>
      <MenuList>
        {subMenu.map((item, index) => (
          <MenuItem key={index}>
            <Link href={item.url}>{item.title}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>    
    </>

  );
};

export default NavigationItem;
