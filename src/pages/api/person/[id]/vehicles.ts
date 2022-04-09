import { NextApiRequest, NextApiResponse } from "next";

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
  async function openDb() {
    return sqlite.open({
      filename: "./mydb.sqlite",
      driver: sqlite3.Database,
    });
  }

  const db = await openDb();
  const allVehicles = await db.all("SELECT * FROM Vehicle WHERE ownerId = ?", [req.query.id]);
  res.json(allVehicles);
}
