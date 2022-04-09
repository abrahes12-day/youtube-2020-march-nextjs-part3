import { NextApiRequest, NextApiResponse } from "next";

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
  async function openDb() {
    return sqlite.open({
      filename: "./mydb.sqlite",
      driver: sqlite3.Database,
    });
  }

  const db = await openDb();
  const vehicle = await db.get("SELECT * FROM Vehicle WHERE id = ?", [req.query.id]);
  res.json(vehicle);
}
