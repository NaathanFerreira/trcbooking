import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../components/Form/Input";
import PageContainer from "../../../components/PageContainer";
import { api } from "../../../services/api";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../services/queryClient";
import { GuestFormData, GuestData } from "../../../types/guestTypes";
import { createGuestFormSchema } from "../../../utils/guestUtils";
import { updateGuest } from "../../../services/hooks/useGuests";
import { toast } from "react-toastify";

interface GuestEditProps {
  guestToEdit: GuestData;
}

function GuestEdit({ guestToEdit }: GuestEditProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GuestFormData>({
    resolver: yupResolver(createGuestFormSchema),
    defaultValues: {
      ...guestToEdit,
    },
  });

  const updateGuestMutation = useMutation(updateGuest, {
    onSuccess: () => {
      queryClient.invalidateQueries(["guests"]);
    },
  });

  const handleUpdateGuest: SubmitHandler<GuestFormData> = async (values) => {
    const guest = {
      ...values,
      id: guestToEdit.id,
    };

    await updateGuestMutation.mutateAsync(guest);
    toast.success("Usuário atualizado com sucesso !");
    router.push("/guests");
  };

  return (
    <PageContainer>
      <Box as="form" onSubmit={handleSubmit(handleUpdateGuest)}>
        <Heading size="lg" fontWeight="normal">
          Editar hóspede
        </Heading>
        <Divider my={6} borderColor="gray.700" />
        <SimpleGrid columns={2} spacing={8} w="100%">
          <Input label="Nome" {...register("name")} error={errors.name} />
          <Input label="RG" {...register("rg")} error={errors.rg} />
          <Input label="CPF" {...register("cpf")} error={errors.cpf} />
          <Input
            label="Telefone"
            {...register("phoneNumber")}
            error={errors.phoneNumber}
          />
          <Input
            label="Data de Nascimento"
            type="date"
            {...register("birthDate")}
            error={errors.birthDate}
          />
        </SimpleGrid>
        <Flex mt={8} justify="flex-end">
          <HStack spacing={4}>
            <Link href="/guests" passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              size="md"
              fontSize="md"
              bg="yellow.600"
              borderColor="yellow.600"
              color="gray.50"
              _hover={{
                bg: "yellow.800",
                borderColor: "yellow.800",
              }}
              isLoading={isSubmitting}
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const response = await api.get(`/guests/${id}`);

  const guestToEdit = response.data;

  return {
    props: {
      guestToEdit,
    },
  };
};

export default GuestEdit;
