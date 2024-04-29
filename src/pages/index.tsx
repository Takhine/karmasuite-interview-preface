import { NextPage } from "next";
import { useGetExpenses } from "../hooks";
import ExpenseInfo from "../components/ExpenseInfo";

const Page: NextPage = () => {
    const { data, isLoading } = useGetExpenses();

    return (
        <div className="container mx-auto my-4 px-4">
            {isLoading ?
                <div>Loading...</div>
                :
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-auto">
                    {data?.map((expense) => (
                        <ExpenseInfo key={expense.expenseName} {...expense} />
                    ))}
                </div>
            }
        </div>
    )
};

export default Page;