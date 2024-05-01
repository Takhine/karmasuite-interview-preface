import { useQuery } from "@tanstack/react-query";
import { FundsPayload } from "../pages/api/funds";


export const useGetFunds = (fundId?: string) => {
    const url = `http://localhost:3000/api/funds/${fundId}`;

    return useQuery({
        queryKey: fundId ? ["funds", fundId] : ["funds"],
        queryFn: async (): Promise<FundsPayload> => {
            return await fetch(url, {
                headers: {
                    "content-type": "application/json",
                },
                method: "get"
            }).then((res) => res.json());
        },
        enabled: !!fundId
    })
}