import db from "../../../lib/dbConnect";
import Company from "../../../models/company";

export default async function handler(req, res) {
  if (req.method == "GET") {
    console.log(req);
    const { companyId } = req.query;

    console.log(companyId);
    await db.connect();

    const company = await Company.findById(companyId);
    db.disconnect();

    if (!company) {
      res.status(404).json({ message: "plastic not found" });
      return;
    }
    res.status(200).json({ company });
  } else {
    res
      .status(405)
      .json({ message: "Method Not Allowed. Only POST Method is allowed" });
  }
}
