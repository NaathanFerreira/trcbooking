import {
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import PageContainer from "../../components/PageContainer";

const hospedes = [
  {
    id: 1,
    nome: "Nathan",
    rg: "12.345.678-9",
    cpf: "789.456.123-21",
    telefone: "(12) 3456-7894",
    dataNascimento: new Date("11/22/2000").toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  },
  {
    id: 2,
    nome: "Gustavo",
    rg: "12.345.678-9",
    cpf: "789.456.123-21",
    telefone: "(12) 3456-7894",
    dataNascimento: new Date("01/10/1999").toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  },
];

function Guests() {
  return (
    <PageContainer>
      <Flex mb={8} justifyContent="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Hóspedes
        </Heading>
        <Link href="/guests/create" passHref>
          <Button
            as="a"
            size="md"
            fontSize="md"
            bg="yellow.600"
            borderColor="yellow.600"
            color="gray.50"
            _hover={{
              bg: "yellow.800",
              borderColor: "yellow.800",
            }}
            leftIcon={<Icon as={RiAddLine} fontSize="20" color="inherit" />}
          >
            Novo hóspede
          </Button>
        </Link>
      </Flex>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>RG</Th>
            <Th>CPF</Th>
            <Th>Telefone</Th>
            <Th>Data Nascinmento</Th>
          </Tr>
        </Thead>
        <Tbody>
          {hospedes.map((hospede) => {
            return (
              <Tr key={hospede.id}>
                <Td>{hospede.nome}</Td>
                <Td>{hospede.rg}</Td>
                <Td>{hospede.cpf}</Td>
                <Td>{hospede.telefone}</Td>
                <Td>{hospede.dataNascimento}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </PageContainer>
  );
}

export default Guests;
