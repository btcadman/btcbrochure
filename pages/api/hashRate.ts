import type { NextApiRequest, NextApiResponse } from 'next'

export async function fetchHashRate(): Promise<number> {
  const res = await fetch(`https://insights.braiins.com/api/v1.0/hash-rate-stats`)
  const data = await res.json()
  return data?.current_hashrate;
}

type Data = {
  hashRate: number;
}

export default async function price(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const hashRate = await fetchHashRate();
    res.status(200).json({ hashRate });
  } catch {
    res.status(502);
  }
}