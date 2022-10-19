import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" px={6} my={6}>
        <Sidebar />
        <Box p={"8"} bg="gray.800" borderRadius="8" pb={4} flex={1}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}

export default PageContainer;
