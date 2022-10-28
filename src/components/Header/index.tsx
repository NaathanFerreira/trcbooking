import {
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSiderbarDrawer } from "../../contexts/SidebarDrawerContext";
import Logo from "./Logo";

function Header() {
  const { onOpen } = useSiderbarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      as="header"
      maxW={1480}
      h="20"
      mt="4"
      mx="auto"
      align="center"
      p={6}
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation bar"
          marginRight={2}
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          variant="unstyled"
          onClick={onOpen}
        />
      )}
      <Logo />
      <Box flex="1" ml="6">
        <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight" ml={2}>
          Pousada Triple Poop
          <Text as="span" ml={1} color="yellow.500">
            .
          </Text>
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
