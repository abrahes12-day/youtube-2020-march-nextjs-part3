import { NextApiRequest, NextApiResponse } from "next";
import Person from "../[vehicle]/[person]";

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method != "GET") {
  //   res.status(500).json({ message: "We only accept GET Request" });
  // }

  async function openDb() {
    return sqlite.open({
      filename: "./mydb.sqlite",
      driver: sqlite3.Database,
    });
  }

  const db = await openDb();
  const vehicle = await db.all("SELECT * FROM Vehicle");
  res.json(vehicle);
}
