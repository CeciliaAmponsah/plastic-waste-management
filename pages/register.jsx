import Link from "next/link";
import React from "react";

const plasticDealers = () => {
  return (
    <div className="min-h-[calc(100vh_-_64px)] flex justify-center items-center">
      <div class="p-4 w-full max-w-3xl m-5 lg:m-0 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Register in to our platform
          </h5>
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
                name="firstname"
                id="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Cecilia"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                for="lastname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
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
    // <form className="bg-[#4C5B00] py-9 px-8">

    //   <div className="grid gap-6 mb-6 md:grid-cols-2">
    //     <div>
    //       <label
    //         for="first_name"
    //         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //       >
    //         First name
    //       </label>
    //       <input
    //         type="text"
    //         id="first_name"
    //         className="bg-[#11130E] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="Cecilia"
    //         required=""
    //       />
    //     </div>
    //     <div>
    //       <label
    //         for="last_name"
    //         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //       >
    //         Last name
    //       </label>
    //       <input
    //         type="text"
    //         id="last_name"
    //         className="bg-[#11130E] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="Amponsah"
    //         required=""
    //       />
    //     </div>
    //     <div>
    //       <label
    //         for="company"
    //         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //       >
    //         Company
    //       </label>
    //       <input
    //         type="text"
    //         id="company"
    //         className="bg-[#11130E] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="CF-PM"
    //         required=""
    //       />
    //     </div>
    //     <div>
    //       <label
    //         for="phone"
    //         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //       >
    //         Phone number
    //       </label>
    //       <input
    //         type="tel"
    //         id="phone"
    //         className="bg-[#11130E] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="0540-222-11-0"
    //         pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{1}"
    //         required=""
    //       />
    //     </div>
    //   </div>
    //   <div className="mb-6">
    //     <label
    //       for="email"
    //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //     >
    //       Email address
    //     </label>
    //     <input
    //       type="email"
    //       id="email"
    //       className="bg-[#11130E] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       placeholder="starcy@gmail.com"
    //       required=""
    //     />
    //   </div>
    //   <div className="mb-6">
    //     <label
    //       for="password"
    //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //     >
    //       Password
    //     </label>
    //     <input
    //       type="password"
    //       id="password"
    //       className="bg-[#11130E] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       placeholder="•••••••••"
    //       required=""
    //     />
    //   </div>
    //   <div className="mb-6">
    //     <label
    //       for="confirm_password"
    //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //     >
    //       Confirm password
    //     </label>
    //     <input
    //       type="password"
    //       id="confirm_password"
    //       className="bg-[#11130E] text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       placeholder="•••••••••"
    //       required=""
    //     />
    //   </div>
    //   <div>
    //     <label
    //       for="register"
    //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    //     >
    //       Register As:
    //     </label>
    //     <select
    //       id="register"
    //       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //     >
    //       <option>Plastic Dealer</option>
    //       <option>People with plastic waste</option>
    //     </select>
    //   </div>
    //   <div className="flex items-start mb-6">
    //     <div className="flex items-center h-5">
    //       <input
    //         id="remember"
    //         type="checkbox"
    //         value=""
    //         className="w-4 h-4 bg-[#11130E] rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
    //         required=""
    //       />
    //     </div>
    //     <label
    //       for="remember"
    //       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    //     >
    //       I agree with the{" "}
    //       <a
    //         href="#"
    //         className="text-blue-600 hover:underline dark:text-blue-500"
    //       >
    //         terms and conditions
    //       </a>
    //       .
    //     </label>
    //   </div>
    //   <button
    //     type="submit"
    //     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //   >
    //     Submit
    //   </button>
    // </form>
  );
};

export default plasticDealers;
