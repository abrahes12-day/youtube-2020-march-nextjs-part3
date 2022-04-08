import { NextApiRequest, NextApiResponse } from "next";

export default function getAllPeople(req: NextApiRequest, res: NextApiResponse) {
  res.json([
    {
      name: "Cuday",
    },
    {
      name: "VanderWall",
    },
  ]);
}
