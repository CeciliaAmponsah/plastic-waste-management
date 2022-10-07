import db from "../../../lib/dbConnect";
import Plastic from "../../../models/plastic";

export async function handler(req, res) {
  if (req.method == "GET") {
    const { plasticId } = req.params;
    await db.connect();

    const plastic = await plastic.findById(plasticId);
    db.disconnect();

    if (!plastic) {
      res.status(404).json({ message: "plastic not found" });
      return;
    }
    res.status(200).json({ plastic });
  }
}
