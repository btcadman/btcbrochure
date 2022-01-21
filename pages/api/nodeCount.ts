import type { NextApiRequest, NextApiResponse } from 'next'

export async function fetchNumNodes(): Promise<number> {
  const res = await fetch(`https://bitnodes.io/api/v1/snapshots/`)
  const data = await res.json()
  return data?.results?.[0]?.total_nodes;
}

type Data = {
  numNodes: number;
}

export default async function price(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const numNodes = await fetchNumNodes();
    res.status(200).json({ numNodes });
  } catch {
    res.status(502);
  }
}