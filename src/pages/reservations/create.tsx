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

const quartos = [1, 2, 3, 4, 5, 6];

function CreateReservation() {
  return (
    <PageContainer>
      <Box as="form">
        <Heading size="lg" fontWeight="normal">
          Nova reserva
        </Heading>
        <Divider my={6} borderColor="gray.700" />
        <SimpleGrid columns={2} spacing={8} w="100%">
          <FormControl>
            <FormLabel htmlFor={"quarto"}>Selecionar Quarto</FormLabel>
            <Select
              name="quarto"
              id="quarto"
              focusBorderColor="yellow.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            >
              {quartos.map((quarto) => {
                return (
                  <option
                    value={quarto}
                    key={quarto}
                    style={{
                      backgroundColor: "#181B23",
                      borderColor: "#181B23",
                    }}
                  >
                    {quarto}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"hospedePagante"}>Hóspede Pagante</FormLabel>
            <Input
              id="hospedePagante"
              name="hospedePagante"
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
            <FormLabel htmlFor={"dataInicio"}>Data Inicio</FormLabel>
            <Input
              id="dataInicio"
              name="dataInicio"
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
          <FormControl>
            <FormLabel htmlFor={"dataFim"}>Data Fim</FormLabel>
            <Input
              id="dataFim"
              name="dataFim"
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
          <FormControl>
            <FormLabel htmlFor={"hospedesAcompanhantes"}>
              Hóspedes Acompanhantes
            </FormLabel>
            <Input
              id="hospedesAcompanhantes"
              name="hospedesAcompanhantes"
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

export default CreateReservation;
