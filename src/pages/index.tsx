import { NextPage } from "next";
import { useGetExpenses, useIntersectionObserver } from "../hooks";
import ExpenseInfo from "../components/ExpenseInfo";
import { useRef, useState } from "react";
import { ExpensesPayload } from "./api/expenses";

const Page: NextPage = () => {
    const ref = useRef(null);
    const isIntersecting = useIntersectionObserver(ref)

    const {
        data,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
        isLoading
    } = useGetExpenses();

    const [pages] = data?.pages || []

    return (
        <div className="container mx-auto my-4 px-4">
            {isLoading ?
                <div>Loading...</div>
                :
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-auto">
                    {pages.map((expense) => (
                        <ExpenseInfo key={expense.expenseName} {...expense} />
                    ))}
                </div>
            }

            <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
            >
                Load More
            </button>
        </div>
    )
};

export default Page;