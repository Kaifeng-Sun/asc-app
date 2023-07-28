import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import React from "react";

interface MenuProps {
  title: string;
  subMenu: string[];
  order: number
}
const NavigationItem: React.FC<MenuProps> = ({ title, subMenu, order }) => {
  return (
    <Menu key={order}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {title}
      </MenuButton>
      <MenuList>
        {subMenu.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavigationItem;
