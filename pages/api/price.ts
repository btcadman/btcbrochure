import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  price: number;
}

async function fetchPrice(): Promise<number> {
  const res = await fetch(`https://river.com/api`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: "query { currentPrice { mid } }" }) })
  const data = await res.json()
  return parseFloat(data?.data?.currentPrice?.mid)
}

export default async function price(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const price = await fetchPrice();
    res.status(200).json({ price });
  } catch {
    res.status(502);
  }
}