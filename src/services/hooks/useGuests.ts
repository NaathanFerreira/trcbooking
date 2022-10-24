import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

type GetGuestsResponse = {
  id: string;
  name: string;
  rg: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
};

async function getGuests(): Promise<GetGuestsResponse[]> {
  const { data } = await api.get("/guests");

  return data;
}

export function useGuests() {
  return useQuery(["guests"], () => getGuests());
}
