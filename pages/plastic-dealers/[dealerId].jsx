import React from "react";
import Image from "next/image";
import bgImage from "../../public/images/landpic-2.jpg";
import { getCompanies } from "../../utils/getCompanies";



export async function getServerSideProps(context) {
  const company = await getCompanies(context.params.companyId);

  return {
    props: {
      company,
    },
  };
}

const PlasticDealerDetails = ({ company }) => {
  console.log(company);
  return (
    <section className="max-w-5xl mx-10 lg:mx-auto py-10 space-y-5 bg-white p-10 mt-5 rounded-md">
      <h1 className="text-3xl text-center mb-10 font-semibold">
        {company[0].name}
      </h1>
      <hr />
      <div className="h-40 md:h-60 lg:h-96 overflow-hidden bg-slate-400 relative">
        <Image
          src={company[0].imageUrl}
          layout="fill"
          objectFit="cover"
          blurDataURL="true"
        />
      </div>
      <div className="space-y-5">
        <p>{company.details}</p>
      </div>
    </section>
  );
};

export default PlasticDealerDetails;
