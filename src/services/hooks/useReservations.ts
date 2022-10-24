import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

type GetReservationsResponse = {
  id: 1;
  roomNumber: string;
  startDate: string;
  endDate: string;
  payingGuest: string;
  accompanyingGuests: String[];
};

async function getReservations(): Promise<GetReservationsResponse[]> {
  const { data } = await api.get("/reservations");

  return data;
}

export function useReservations() {
  return useQuery(["reservations"], () => getReservations());
}
