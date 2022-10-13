import React, { useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getCompanies } from "../../utils/getCompanies";
import Image from "next/image";

export async function getServerSideProps() {
  const companies = await getCompanies();

  return {
    props: {
      companies,
    },
  };
}

const PlasticDealers = ({ companies }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status]);

  return (
    <div className="grid lg:grid-cols-2 mt-10 gap-10 w-10/12 mx-auto place-content-center">
      {companies.map((company, idx) => (
        <React.Fragment key={idx}>
          <Link href={`plastic-dealers/${company._id}`}>
            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
              <Image
                className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={company.imageUrl}
                height="2000"
                width="2000"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {company.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {company.details}
                </p>
              </div>
            </div>
          </Link>
        </React.Fragment>
      ))}

      <Link href="plastic-dealers/1">
        <div className="flex flex-col items-center bg-white rounded-lg border  shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/plastic-2.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Dispose Green
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Dispose is Ghana’s first digital waste management company. We
              provide waste collection and recycling services to homes and
              business. Our smart waste technology allows you to schedule a
              waste pickup, view invoices, make payments and get insights into
              your waste management.
            </p>
          </div>
        </div>
      </Link>
      <Link href="plastic-dealers/1">
        <div className="flex flex-col items-center bg-white rounded-lg border  shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/landpic2.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sika Plast Recycling
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We turn all your plastic wastes 2 wealth by ensuring a clean,
              healthy and sustainable environment for all. good health requires
              good air, and good air require good soil and water. Collectively
              we can make our world embraceable.
            </p>
          </div>
        </div>
      </Link>
      <Link href="plastic-dealers/1">
        <div className="flex flex-col items-center bg-white rounded-lg border  shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/plastic-3.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Waste 360
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Waste 360 provide services for quick, convenient removal of
              large-scale refuse container. We can set up a regular schedule to
              empty the containers, or you may simply call us when you need it
              emptied. We provide Bulk Refuse Container Service you can count on
              for safety and consistency. Our drivers go through a rigorous
              drivers safety course and are equipped to respond immediately to
              customer service requests.
            </p>
          </div>
        </div>
      </Link>
      <Link href="plastic-dealers/1">
        <div className="flex flex-col items-center bg-white rounded-lg border  shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/plastic-land2.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Alliance To End Plastic Waste
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We are working together to end plastic waste
            </p>
          </div>
        </div>
      </Link>
      <Link href="plastic-dealers/1">
        <div className="flex flex-col items-center bg-white rounded-lg border  shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/plastic-land.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BolaBird
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              With local goverments in developing countries inability to meet up
              with the responsibility and delivery of municipal solid & liquid
              waste service, BolaBird has been developed to involved the
              community effectively in resolving this problem with the use of
              its cloud based enterpirse technology platform which connects
              local waste haulers and recycling buisness to customers who need
              thier services.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlasticDealers;
