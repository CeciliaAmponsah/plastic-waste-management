import axios from "axios";

export const getCompanies = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/companies`
  );

  const companies = res.data.companies;

  if (id) {
    const company = companies.find((company) => String(company._id) === id);
    console.log(company);
    return company;
  }

  return companies;
};
