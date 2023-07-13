import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <>
      <Box height="80px" backgroundColor={"grey"}>
        <Center>LOGO</Center>
      </Box>

      <Flex justify={"space-between"}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              About
            </MenuButton>
            <MenuList>
              <MenuItem>OUR VISION</MenuItem>
              <MenuItem>OUR ETHICS & PURPOSE</MenuItem>
              <MenuItem>OUR HISTORY</MenuItem>
              <MenuItem>OUR GOVERNANCE & STRUCTURE</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              GET INVOLVED
            </MenuButton>
            <MenuList>
              <MenuItem>AN ORGANISATION FOR SENIORS AND EVERYONE</MenuItem>    
              <MenuItem>HOW TO JOIN</MenuItem>
              <MenuItem>FUNDRAIDING</MenuItem>
              <MenuItem>DONATIONS</MenuItem>
            
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              OUR IMPACT
            </MenuButton>
            <MenuList>
              <MenuItem>HEALTH</MenuItem>
              <MenuItem>FITNESS</MenuItem>
              <MenuItem>THE ENVIRONMENT</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              OUR PROGRAMS
            </MenuButton>
            <MenuList>
              <MenuItem>BAITLTH</MenuItem>
              <MenuItem>BRIDGE</MenuItem>
              <MenuItem>BADMINTON</MenuItem>
              <MenuItem>TABLE TENNIS</MenuItem>
              <MenuItem>PICNICS</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              NEWS AND FEATURES
            </MenuButton>
            <MenuList>
              <MenuItem>NEWS</MenuItem>
              <MenuItem>OUR STORIES</MenuItem>
              <MenuItem>AWARDS AND RECOGNITION</MenuItem>
              <MenuItem>NEWSLETTERS</MenuItem>
              <MenuItem>UPCOMING EVENTS</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              KEEP IN TOUCH
            </MenuButton>
            <MenuList>
              <MenuItem>FEEDBACK</MenuItem>
            </MenuList>
          </Menu>
      </Flex>
    </>
  );
};

export default NavigationBar;
