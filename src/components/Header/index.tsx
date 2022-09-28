import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";

function Header() {
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
