import React from "react";
import Image from "next/image";
import bgImage from "../public/images/land-3.jpg";

const Header = () => {
  return (
    <div
      className="bg-header-image h-[calc(100vh_-_64px)] flex justify-center items-center"
      style={{ backgroundImage: "../public/images/land-3.jpg" }}
    >
      {/* <Image
        class="max-w-full h-auto"
        src={bgImage}
        alt="image description"
        layout="responsive"
        objectFit="cover"
      /> */}
      <div
        className="absolute max-w-4xl  font-style: italic
 "
      >
        <div className="mx-auto w-40">
          <img src="/images/logo.png" width="200" height="200" />
        </div>
        <h1 className="text-gray-900 text-7xl font-extrabold  text-center  cursor-pointer">
          CiliaFred-Plastic Management
        </h1>
        <p className="text-gray-900 text-5xl font-extrabold  text-center leading-snug  cursor-pointer">
          we are excellent problem solvers for both plastic-dealers and people
          with plastic-waste
        </p>
      </div>
    </div>
  );
};

export default Header;
