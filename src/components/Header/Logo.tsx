import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { GiFamilyHouse } from "react-icons/gi";

function Logo() {
  return (
    <Box w={64}>
      <Icon as={GiFamilyHouse} fontSize={42} color="yellow.500" />
    </Box>
  );
}

export default Logo;
