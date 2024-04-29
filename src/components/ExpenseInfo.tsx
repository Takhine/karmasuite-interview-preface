import React from "react";

interface ExpenseInfoProps {
    expenseName: string;
    accountCode: string;
};

/**
 * Block containing expense name and it's associated account code
 */
const ExpenseInfo: React.FC<ExpenseInfoProps> = ({ expenseName, accountCode }) => {
    return (
        <div className="flex flex-col gap-2 p-4 border border-slate-300 rounded">
            <div className="flex gap-2">
                <h3 className="font-bold">Expense:</h3>
                <p>{expenseName}</p>
            </div>
            <div className="flex gap-2">
                <h3 className="font-bold">Account Code:</h3>
                <p>{accountCode}</p>
            </div>
        </div>
    );
};

ExpenseInfo.displayName = "ExpenseInfo";

export default ExpenseInfo;