import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Form/Input";

type LoginFormData = {
  login: string;
  senha: string;
};

const Home: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handleUserLogin: SubmitHandler<LoginFormData> = (values) => {
    router.push("/reservations");
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        onSubmit={handleSubmit(handleUserLogin)}
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input label="Login" type="text" {...register("login")} />
          <Input label="Senha" type="password" {...register("senha")} />
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
