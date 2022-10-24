import {
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import PageContainer from "../../components/PageContainer";
import { useReservations } from "../../services/hooks/useReservations";

function Reservations() {
  const { isLoading, error, data } = useReservations();

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
      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha ao obter dados das reservas</Text>
        </Flex>
      ) : (
        <>
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
              {data?.map((reservation) => {
                return (
                  <Tr key={reservation.id}>
                    <Td>{reservation.roomNumber}</Td>
                    <Td>{reservation.startDate}</Td>
                    <Td>{reservation.endDate}</Td>
                    <Td>{reservation.payingGuest}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </>
      )}
    </PageContainer>
  );
}

export default Reservations;
