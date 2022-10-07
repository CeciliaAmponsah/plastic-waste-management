import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const plasticDealers = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;

    if (
      firstName == "" &&
      lastName == "" &&
      email == "" &&
      password == "" &&
      confirmPassword == ""
    ) {
      setError("please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("please enter a valid email");
      return;
    }
    if (password !== confirmPassword) {
      setError("password do not match");
      return;
    }

    try {
       await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
      router.push("/")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_64px)] flex justify-center items-center p-7">
      <div class="p-4 w-full max-w-3xl m-5 lg:m-0 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Register in to our platform
          </h5>
          {error && <p className="text-red-700">{error}</p>}

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label
                for="firstname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Cecilia"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                for="lastName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Amponsah"
                required=""
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder=""
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div>
            <label
              for="confirmPassword"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              confirm password
            </label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
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
            >
              <option>------------Select your category------------</option>
              <option>Plastic Dealer</option>
              <option>People with plastic waste</option>
            </select>
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
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

export default plasticDealers;
