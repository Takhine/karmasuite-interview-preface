import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../db';
import { eq } from 'drizzle-orm';

export type FundsPayload = Awaited<ReturnType<typeof getFunds>>;

const getFunds = async (req:NextApiRequest ) => {

    const data = db.query.fund.findMany();
    return data;
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<FundsPayload>) {

    const result = await getFunds(req);

    return res.status(200).json(result);
}