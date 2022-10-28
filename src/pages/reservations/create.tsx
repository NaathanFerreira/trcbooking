import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import PageContainer from "../../components/PageContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateReservationFormData = {
  roomNumber: string;
  payingGuest: string;
  startDate: string;
  endDate: string;
  accompanyingGuests: string;
};

const rooms = ["1", "2", "3", "4", "5", "6"];

const createReservationFormSchema = yup.object({
  payingGuest: yup.string().required("Hóspede pagante obrigatório"),
  startDate: yup.string().required("Data de início obrigatória"),
  endDate: yup.string().required("Data de fim obrigatória"),
});

function CreateReservation() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateReservationFormData>({
    resolver: yupResolver(createReservationFormSchema),
  });

  const handleCreateNewReservation: SubmitHandler<CreateReservationFormData> = (
    values
  ) => {
    router.push("/reservations");
  };

  return (
    <PageContainer>
      <Box as="form" onSubmit={handleSubmit(handleCreateNewReservation)}>
        <Heading size="lg" fontWeight="normal">
          Nova reserva
        </Heading>
        <Divider my={6} borderColor="gray.700" />
        <SimpleGrid columns={2} spacing={8} w="100%">
          <FormControl>
            <FormLabel htmlFor={"quarto"}>Selecionar Quarto</FormLabel>
            <Select
              id="quarto"
              focusBorderColor="yellow.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
              {...register("roomNumber")}
            >
              {rooms.map((room) => {
                return (
                  <option
                    value={room}
                    key={room}
                    style={{
                      backgroundColor: "#181B23",
                      borderColor: "#181B23",
                    }}
                  >
                    {room}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Input
            label="Hóspede Pagante"
            {...register("payingGuest")}
            error={errors.payingGuest}
          />
          <Input
            label="Data de Início"
            type="date"
            {...register("startDate")}
            error={errors.startDate}
          />
          <Input
            label="Data de Fim"
            type="date"
            {...register("endDate")}
            error={errors.endDate}
          />
          <Input
            label="Hóspedes Acompanhantes"
            {...register("accompanyingGuests")}
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

export default CreateReservation;
