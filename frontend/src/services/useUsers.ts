import { useQuery } from "react-query";
import httpClient from "../api/httpClient";

export const useUsers = (searchParam?: string) => {
  return useQuery(["users", searchParam], async () => {
    try {
      const res = await httpClient.get("/api/v1/users", {
        params: { q: searchParam },
      });
      return res?.data;
    } catch (error: any) {
      // Add type annotation to error parameter
      console.error("error in users", error?.response?.data?.detail);
      throw error; // Lanza el error para que React Query lo maneje
    }
  });
};
