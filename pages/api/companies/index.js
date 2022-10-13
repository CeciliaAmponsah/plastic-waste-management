import db from "../../../lib/dbConnect";
import Company from "../../../models/company";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await db.connect();

    const companies = await Company.find({});
    await db.disconnect();
    res.status(200).json({ companies });
  } else if (req.method == "POST") {
    await db.connect();

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const company = await Company.create({
      ...req.body,
      password: hashedPassword,
    });

    await db.disconnect();
    res.status(201).json({ company });
  } else {
    res.status(405).json({ error: "only plastic and GET methods are allowed" });
  }
}
