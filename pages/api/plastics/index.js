import db from "../../../lib/dbConnect";
import Plastic from "../../../models/plastic";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await db.connect();

    const plastics = await Plastic.find({});
    await db.disconnect();
    res.status(200).json({ plastics });
  } else if (req.method == "POST") {
    await db.connect();

    const { companyName, location, phoneNumber, companyEmail } = req.body;

    const plastic = await Plastic.create({
      companyName,
      location,
      phoneNumber,
      companyEmail,
    });

    await db.disconnect();
    res.status(201).json({ plastic });
  } else {
    res.status(405).json({ error: "only plastic and GET methods are allowed" });
  }
}
