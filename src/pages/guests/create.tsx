import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import PageContainer from "../../components/PageContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateGuestFormData = {
  name: string;
  rg: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
};

const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;
const rgRegex = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/;
const phoneNumberRegex = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;

const createGuestFormSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  rg: yup
    .string()
    .required("RG obrigatório")
    .test("RG válido", "RG inválido", (rg: any) => rgRegex.test(rg)),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .test("CPF válido", "CPF inválido", (cpf: any) => cpfRegex.test(cpf)),
  phoneNumber: yup
    .string()
    .required("Telefone obrigatório")
    .test("Telefone válido", "Telefone inválido", (phoneNumber: any) =>
      phoneNumberRegex.test(phoneNumber)
    ),
  birthDate: yup.string().required("Data de nascimento obrigatório"),
});

function CreateGuest() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGuestFormData>({
    resolver: yupResolver(createGuestFormSchema),
  });

  const handleCreateNewGuest: SubmitHandler<CreateGuestFormData> = (values) => {
    console.log(values);
    router.push("/guests");
  };

  return (
    <PageContainer>
      <Box as="form" onSubmit={handleSubmit(handleCreateNewGuest)}>
        <Heading size="lg" fontWeight="normal">
          Novo hóspede
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
            <Link href="/reservations" passHref>
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
