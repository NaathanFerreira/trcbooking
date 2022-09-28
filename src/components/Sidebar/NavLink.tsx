import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import ActiveLink from "./ActiveLink";

interface NavLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

function NavLink({ icon, children, href }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}

export default NavLink;
