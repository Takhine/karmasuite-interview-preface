import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../db';
import { eq } from 'drizzle-orm';

const getFund = async (req: NextApiRequest) => {
    console.log(req.query)
    const fundId = req.query.fundId as string;

    const data = await db.query.fund.findFirst({
        where: eq(db.fund.id, parseInt(fundId)),
        with: {
            allocations: {
                with: {
                    allocation: true
                }
            }
        }
    })

    return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const result = await getFund(req);

    return res.status(200).json(result);

}