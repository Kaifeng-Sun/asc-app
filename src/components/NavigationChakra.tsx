"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useSession, signIn, signOut } from "next-auth/react";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { data: session, status } = useSession();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {status === "authenticated" ? (
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              onClick={() => null}
              _hover={{
                bg: "blue.300",
              }}
            >
              Profile
            </Button>
          ) : (
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              onClick={() => signIn()}
              _hover={{
                bg: "blue.300",
              }}
            >
              Sign In
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.url ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, url, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={url}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, url }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={"#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.url}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  url?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "ABOUT AISA",
    url: "/aboutaisa",
    children: [
      { label: "OUR VISION & MISSION", url: "/aboutaisa/mission" },
      { label: "OUR ETHICS & PURPOSE", url: "/aboutaisa/purpose" },
      { label: "OUR HISTORY", url: "/aboutaisa/history" },
      { label: "OUR GOVERNANCE & STRUCTURE", url: "/aboutaisa/structure" },
      { label: "CONSTITUTION EXTRACT", url: "/aboutaisa/extract" },
      { label: "FULL CONSTITUTION", url: "/aboutaisa/constitution" },
    ],
  },
  {
    label: "GET INVOLVED",
    url: "/getinvolved",
    children: [
      {
        label: "AN ORGANISATION FOR SENIORS AND EVERYONE",
        url: "/getinvolved",
      },
      { label: "HOW TO JOIN", url: "/getinvolved/join" },
      { label: "FUNDRAIDING", url: "/getinvolved" },
      { label: "DONATIONS", url: "/getinvolved" },
      { label: "VOLUNTEERING", url: "/getinvolved" },
    ],
  },
  {
    label: "OUR IMPACT",
    url: "/ourimpact",
    children: [
      { label: "HEALTH", url: "/ourimpact" },
      { label: "FITNESS", url: "/ourimpact" },
      { label: "THE ENVIRONMENT", url: "/ourimpact" },
    ],
  },
  {
    label: "OUR PROGRAMS",
    url: "/ourprograms",
    children: [
      { label: "BAITHAK", url: "/ourprograms/baithak" },
      { label: "BRIDGE", url: "/ourprograms/bridge" },
      { label: "BADMINTON", url: "/ourprograms/badminton" },
      { label: "VOLLEYBALL", url: "/ourprograms/volleyball" },
      { label: "Special-Purpose Initiatives", url: "/ourprograms/special" },
      { label: "CULTURAL FUNCTIONS", url: "/ourprograms/culture" },
    ],
  },
  {
    label: "NEWS AND FEATURES",
    url: "/news",
    children: [
      { label: "NEWS", url: "/news" },
      { label: "OUR STORIES", url: "/news/stories" },
      // { label: "AWARDS AND RECOGNITION", url: "" },
      { label: "USEFUL CONTENT", url: "/news/content" },
    ],
  },
  {
    label: "KEEP IN TOUCH",
    url: "/keepintouch",
    children: [
      { label: "FEEDBACK", url: "/keepintouch" },
      { label: "NEW IDEAS / SUGGESTIONS", url: "" },
      { label: "CONTACT US", url: "" },
    ],
  },
];
