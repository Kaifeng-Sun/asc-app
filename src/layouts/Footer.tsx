import {
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  SystemProps,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { SVGProps } from "react";

export const FooterContent = `&copy; ${new Date().getFullYear()} Aisa Seniors. All rights reserved.`;

type IconProps = SVGProps<SVGSVGElement>;
export function EmailIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M10.8289 12.2421C10.5274 12.4485 10.167 12.5515 9.802 12.5355C9.43696 12.5515 9.07659 12.4485 8.7751 12.2421L1 8.06116V15.4695C1 16.0531 1.23184 16.6128 1.64451 17.0255C2.05719 17.4382 2.61689 17.67 3.2005 17.67H16.4035C16.9871 17.67 17.5468 17.4382 17.9595 17.0255C18.3722 16.6128 18.604 16.0531 18.604 15.4695V8.06116L10.8289 12.2421Z"
        fill="currentColor"
      />
      <path
        d="M16.4035 3H3.20051C2.6169 3 2.0572 3.23184 1.64452 3.64451C1.23185 4.05719 1.00001 4.61689 1.00001 5.2005V5.934C0.99931 6.06627 1.03269 6.19649 1.09692 6.31211C1.16116 6.42773 1.25409 6.52487 1.36676 6.59415L9.43526 10.9951C9.54788 11.0544 9.67524 11.0799 9.80201 11.0685C9.92877 11.0799 10.0561 11.0544 10.1688 10.9951L18.2373 6.59415C18.3499 6.52487 18.4429 6.42773 18.5071 6.31211C18.5713 6.19649 18.6047 6.06627 18.604 5.934V5.2005C18.604 4.61689 18.3722 4.05719 17.9595 3.64451C17.5468 3.23184 16.9871 3 16.4035 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

type LinkItemProps = {
  icon: ElementType;
  children: string;
  href: string;
  iconColor?: SystemProps["color"];
};

function LinkItem(props: LinkItemProps) {
  const { icon, children, href, iconColor = "brown.600" } = props;
  return (
    <HStack as="a" href={href} rel="noopener" target="_blank" spacing="3">
      <Icon aria-hidden as={icon} fontSize="xl" color={iconColor} />
      <Text
        textDecoration="underline"
        textDecorationThickness="1px"
        textUnderlineOffset="3px"
      >
        {children}
      </Text>
    </HStack>
  );
}

const shared = {
  name: "Segun Adebayo",
  repo: "https://github.com/segunadebayo/adebayosegun.com",
  editUrl: "https://github.com/segunadebayo/adebayosegun.com/edit/main/data/",
  website: "https://adebayosegun.com",
  title:
    "Segun Adebayo (aka Sage) - UI Engineer (Design Systems), Software Developer and Product Designer",
  description:
    "UI Engineer passionate about design systems, state machines, accessibility, DX and Rust.",
  image: "https://adebayosegun.com/static/images/banner.png",
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: "website",
  title: shared.title,
  titleTemplate: "%s - Segun Adebayo",
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: "https://github.com/segunadebayo",
    twitter: "https://twitter.com/thesegunadebayo",
    linkedin: "https://linkedin.com/in/thesegunadebayo",
    email: "mailto:sage@adebayosegun.com",
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: "@thesegunadebayo",
    site: "@thesegunadebayo",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: "https://adebayosegun.com/static/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Segun Adebayo (aka Sage) - UI Engineer (Design Systems), Software Developer and Product Designer",
      },
    ],
  },
};
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}
function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Box as={Link} href={href}>
      {children}
    </Box>
  );
}

export default function Footer() {
  return (
    <Box as="footer" position="relative" paddingY="10" bg="#25336f"  color="white">
      <Box maxWidth="6xl" marginX="auto" paddingX="6">
        <SimpleGrid columns={{ base: 4, md: 12 }} spacing="16">
          <GridItem colSpan={6}>
            <Box>
              <Heading marginBottom="6" size="lg">
                AISA Seniors
              </Heading>
              <Text fontSize="lg">
                Australian Indian Seniors Association (AISA) is a not-for-profit
                association based in Victoria primarily focussed on the health
                and well-being of Indian seniors living in Victoria.
              </Text>
            </Box>

            <HStack marginTop="9" spacing={{ base: "8", md: "10" }}>
              <LinkItem href={siteConfig.profiles.email} icon={EmailIcon}>
                Email
              </LinkItem>
            </HStack>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              Contact
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href={siteConfig.profiles.email}>
                Email Aisa
              </FooterLink>
              <FooterLink href="https://calendly.com/segunadebayo/meet">
                Chat with Aisa
              </FooterLink>
            </Flex>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              General
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href="/mission">My Mission</FooterLink>
              <FooterLink href="/story">My Story</FooterLink>
              <FooterLink href="/family">My Family</FooterLink>
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Text marginTop="20">{FooterContent} </Text>
      </Box>
    </Box>
  );
}
