import type { NextApiRequest, NextApiResponse } from 'next';

export default async function get_product_types(req: NextApiRequest, res: NextApiResponse) {
  let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}dbwebapi/products/getproducttypes/`).then((response) => response.json());
  res.status(200).json(data);
}
