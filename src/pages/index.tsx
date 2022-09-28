import { Button, Flex, Stack, Box, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Input from "../components/Form/Input";

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input name="login" label="Login" type="text" />
          <Input name="senha" label="Senha" type="password" />
        </Stack>
        <Button
          type="submit"
          marginTop={6}
          color="gray.50"
          colorScheme="orange"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
