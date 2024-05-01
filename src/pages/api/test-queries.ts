import { eq, desc, asc, sql } from "drizzle-orm";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db";
import { count } from "drizzle-orm";
import { sum } from "drizzle-orm";

// reusable sql query
const lower = (text: string) => {
    return sql<string>`lower(${text})`;
}

const getExpenses = async (req: NextApiRequest) => {
    const select = await db
        .select({
            expenseId: db.expense.id,
            costCenterId: db.costCenterAllocation.id,
        })
        .from(db.expense)
        .innerJoin(db.costCenterAllocation, eq(db.costCenterAllocation.expenseId, db.expense.id))
        .limit(10)
        .offset(0);

    console.log(JSON.stringify(select, null, 4));

    const query = await db.query.expense.findMany({
        orderBy: [desc(db.expense.name)],
        columns: { id: true, name: true },
        with: {
            allocations: {
                columns: { id: true, }
            },
            account: {
                columns: { name: true }
            }
        },
        limit: 10,
        offset: 0,
    });


    console.log(JSON.stringify(query, null, 4));

    return {
        select,
        query,
    };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const result = await getExpenses(req);

    return res.status(200).json(result);
};
