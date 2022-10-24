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
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import PageContainer from "../../components/PageContainer";
import { useGuests } from "../../services/hooks/useGuests";

function Guests() {
  const { isLoading, error, data } = useGuests();

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
                <Th>Nome</Th>
                <Th>RG</Th>
                <Th>CPF</Th>
                <Th>Telefone</Th>
                <Th>Data Nascinmento</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((guest) => {
                return (
                  <Tr key={guest.id}>
                    <Td>{guest.name}</Td>
                    <Td>{guest.rg}</Td>
                    <Td>{guest.cpf}</Td>
                    <Td>{guest.phoneNumber}</Td>
                    <Td>{guest.birthDate}</Td>
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

export default Guests;
