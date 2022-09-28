import React from "react";
import Image from "next/image";
import bgImage from "../public/images/land-3.jpg";

const Header = () => {
  return (
    <div
      className="bg-header-image h-screen"
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
        className="absolute bottom-1/2 items-center-1/2 font-style: italic
 "
      >
        <h1 className="text-gray-900 text-5xl font-extrabold  p-7 text-center">
          CiliaFred-Plastic Management
        </h1>
        <p className="text-gray-900 text-5xl font-extrabold text-center">
          we are excellent problem solvers for both plastic-dealers and people
          with plastic-waste
        </p>
      </div>
    </div>
  );
};

export default Header;
