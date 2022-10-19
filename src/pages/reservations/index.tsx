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
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import PageContainer from "../../components/PageContainer";

const reservas = [
  {
    id: 1,
    quarto: 1,
    dataInicio: "22/11/2022",
    dataFim: "30/11/2022",
    hospedePagante: "Nathan",
  },
  {
    id: 2,
    quarto: 2,
    dataInicio: "31/12/2022",
    dataFim: "10/01/2023",
    hospedePagante: "Gustavo",
  },
];

function Reservations() {
  return (
    <PageContainer>
      <Flex mb={8} justifyContent="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Reservas
        </Heading>
        <Link href="/reservations/create" passHref>
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
            Nova reserva
          </Button>
        </Link>
      </Flex>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Nº Quarto</Th>
            <Th>Data início</Th>
            <Th>Data fim</Th>
            <Th>Hóspede pagante</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reservas.map((reserva) => {
            return (
              <Tr key={reserva.id}>
                <Td>{reserva.quarto}</Td>
                <Td>{reserva.dataInicio}</Td>
                <Td>{reserva.dataFim}</Td>
                <Td>{reserva.hospedePagante}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </PageContainer>
  );
}

export default Reservations;
