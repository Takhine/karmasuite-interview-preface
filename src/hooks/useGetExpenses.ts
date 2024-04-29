import { useQuery } from "@tanstack/react-query";
import type { ExpensesPayload } from "../pages/api/expenses";
import { useMemo } from "react";
import { fetcher } from "../utils/fetcher";

export const useGetExpenses = () => {
    const requestUrl = useMemo(() => {
        const url = new URL("http://localhost:3000/api/expenses");

        return url.toString();
    }, []);

    return useQuery({
        queryKey: ["expenses"],
        queryFn: async (): Promise<ExpensesPayload> => {
            return await fetcher(requestUrl)
        },
    });
};
