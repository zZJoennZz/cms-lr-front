import type { NextApiRequest, NextApiResponse } from "next";
import type { PageContent } from "../../types/appTypes";

export default async function pageContent(
  req: NextApiRequest,
  res: NextApiResponse<PageContent[]>
) {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}dbwebapi/shop/getpagecontents/`
  ).then((response) => response.json());

  res.status(200).json(data);
}
