import { useInfiniteQuery } from "@tanstack/react-query";
import type { ExpensesPayload } from "../pages/api/expenses";
import { useMemo } from "react";

export const useGetExpenses = () => {
    const requestUrl = useMemo(() => {
        const url = new URL("http://localhost:3000/api/expenses");

        return url.toString();
    }, []);

    return useInfiniteQuery({
        queryKey: ["expenses"],
        queryFn: async ({pageParam = 0}): Promise<ExpensesPayload> => {
            console.log({pageParam})
            return await fetch(`${requestUrl}?pageNo=${pageParam}`, {
                headers: {
                    "content-type": "application/json",
                },
                method: "get",
            }).then((res) => res.json());
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage: any) => {
            console.log({lastPage})
            return lastPage.nextCursor ?? undefined
        }
    });
};
