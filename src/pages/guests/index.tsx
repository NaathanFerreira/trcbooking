import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { RiAddLine, RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { toast } from "react-toastify";
import PageContainer from "../../components/PageContainer";
import { deleteGuest, useGuests } from "../../services/hooks/useGuests";
import { queryClient } from "../../services/queryClient";

function Guests() {
  const { isLoading, error, data } = useGuests();

  const deleteGuestMutation = useMutation(deleteGuest, {
    onSuccess: () => {
      queryClient.invalidateQueries(["guests"]);
    },
  });

  async function handleDeleteGuest(id: number) {
    await deleteGuestMutation.mutateAsync(id);
    toast.success("Usuário deletado com sucesso !");
  }

  return (
    <PageContainer>
      <Flex mb={8} justifyContent="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Hóspedes ({data?.length})
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
                <Th textAlign="center">Nome</Th>
                <Th textAlign="center">RG</Th>
                <Th textAlign="center">CPF</Th>
                <Th textAlign="center">Telefone</Th>
                <Th textAlign="center">Data Nascinmento</Th>
                <Th textAlign="center" width={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((guest) => {
                return (
                  <Tr key={guest.id}>
                    <Td textAlign="center">{guest.name}</Td>
                    <Td textAlign="center">{guest.rg}</Td>
                    <Td textAlign="center">{guest.cpf}</Td>
                    <Td textAlign="center">{guest.phoneNumber}</Td>
                    <Td textAlign="center">{guest.birthDate}</Td>
                    <Td textAlign="center">
                      <HStack spacing={1}>
                        <Link href={`/guests/edit/${guest.id}`} passHref>
                          <IconButton
                            as="a"
                            aria-label="edit-icon"
                            colorScheme="orange"
                            icon={<Icon as={RiPencilLine} />}
                          />
                        </Link>
                        <IconButton
                          disabled={deleteGuestMutation.isLoading}
                          aria-label="delete-icon"
                          colorScheme="red"
                          icon={<Icon as={RiDeleteBin6Line} />}
                          onClick={() => handleDeleteGuest(guest.id)}
                        />
                      </HStack>
                    </Td>
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
