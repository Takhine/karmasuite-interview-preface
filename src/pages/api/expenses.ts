import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db";
import { eq } from "drizzle-orm";

export type ExpensesPayload = Awaited<ReturnType<typeof getExpenses>>;

/**
 * @description The API returns a list of 
 * expense names and their associated account codes.
 */
const getExpenses = async (req: NextApiRequest) => {
    const result = await db
        .select({
            expenseName: db.expense.name,
            accountCode: db.account.code,
        })
        .from(db.expense)
        .innerJoin(db.account, eq(db.account.id, db.expense.accountId))

    return result;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ExpensesPayload>,
) {
    const result = await getExpenses(req);

    return res.status(200).json(result);
};
