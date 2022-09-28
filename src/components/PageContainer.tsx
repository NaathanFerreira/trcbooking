import { Flex } from "@chakra-ui/react";
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
        {children}
      </Flex>
    </Flex>
  );
}

export default PageContainer;
