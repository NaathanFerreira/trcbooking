import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import PageContainer from "../../components/PageContainer";

function CreateGuest() {
  return (
    <PageContainer>
      <Box as="form">
        <Heading size="lg" fontWeight="normal">
          Novo hóspede
        </Heading>
        <Divider my={6} borderColor="gray.700" />
        <SimpleGrid columns={2} spacing={8} w="100%">
          <FormControl>
            <FormLabel htmlFor={"nome"}>Nome</FormLabel>
            <Input
              id="nome"
              name="nome"
              type="text"
              focusBorderColor="yellow.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"rg"}>RG</FormLabel>
            <Input
              id="rg"
              name="rg"
              type="text"
              focusBorderColor="yellow.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"cpf"}>Cpf</FormLabel>
            <Input
              id="cpf"
              name="cpf"
              type="text"
              focusBorderColor="yellow.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"telefone"}>Telefone</FormLabel>
            <Input
              id="telefone"
              name="telefone"
              type="text"
              focusBorderColor="yellow.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"dataNascimento"}>Data de Nascimento</FormLabel>
            <Input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              focusBorderColor="yellow.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
        </SimpleGrid>
        <Flex mt={8} justify="flex-end">
          <HStack spacing={4}>
            <Link href="/reservations" passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button
              size="md"
              fontSize="md"
              bg="yellow.600"
              borderColor="yellow.600"
              color="gray.50"
              _hover={{
                bg: "yellow.800",
                borderColor: "yellow.800",
              }}
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </PageContainer>
  );
}

export default CreateGuest;
