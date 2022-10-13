import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const [error, setError] = useState("");
  const [state, setState] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state === "") {
      setError("Please select a category");
    } else {
      if (state === "plastic-dealer") {
        router.push("/register/plastic-dealer");
      } else if (state === "user") {
        router.push("/register/user");
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_64px)] flex justify-center items-center p-7">
      <div class="p-4 w-full max-w-md m-5 lg:m-0 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Register As
          </h5>
          {error && <p className="text-red-700 text-center">{error}</p>}
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Register As
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setState(e.target.value)}
            >
              <option>------------Select your category------------</option>
              <option value={"plastic-dealer"}>Plastic Dealer</option>
              <option value={"user"}>People with plastic waste</option>
            </select>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Proceed
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
            <Link href="/login">
              <a
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
