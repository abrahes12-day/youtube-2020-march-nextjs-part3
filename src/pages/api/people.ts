import { NextApiRequest, NextApiResponse } from "next";
import Person from "../[vehicle]/[person]";

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getAllPeople(req: NextApiRequest, res: NextApiResponse) {
  async function openDb() {
    return sqlite.open({
      filename: "./mydb.sqlite",
      driver: sqlite3.Database,
    });
  }

  const db = await openDb();
  const people = await db.all("SELECT * FROM Person");
  res.json(people);
}
