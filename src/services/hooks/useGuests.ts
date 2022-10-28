import { useQuery } from "@tanstack/react-query";
import { GuestData, GuestFormData } from "../../types/guestTypes";
import { api } from "../api";

export async function getGuests(): Promise<GuestData[]> {
  const { data } = await api.get<GuestData[]>("/guests");

  const guests = data.map((guest) => {
    return {
      ...guest,
      birthDate: new Date(guest.birthDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };
  });

  return guests;
}

export async function createGuest(guest: GuestFormData) {
  const response = await api.post("/guests", {
    ...guest,
  });

  return response.data;
}

export async function updateGuest(guest: GuestData) {
  const response = await api.put(`/guests/${guest.id}`, {
    ...guest,
  });

  return response.data;
}

export async function deleteGuest(id: number) {
  await api.delete(`/guests/${id}`);
}

export function useGuests() {
  return useQuery(["guests"], () => getGuests());
}
