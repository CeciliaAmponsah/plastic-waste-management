import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PlasticDealer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    details: "",
    phoneNumber: "",
    imageUrl: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    const {
      name,
      email,
      password,
      confirmPassword,
      location,
      details,
      phoneNumber,
    } = data;

    if (
      name === "" &&
      location === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === "" &&
      details === "" &&
      phoneNumber === ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }

    console.log(data);

    const formData = new FormData();
    formData.append("file", data.imageUrl);
    formData.append("upload_preset", "mern blog");

    try {
      // send the image to cloudinary
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/banker/image/upload",
        formData
      );
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/companies`, {
        ...data,
        imageUrl: res.data.url,
      });
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_64px)] flex justify-center items-center p-7">
      <div class="p-4 w-full max-w-3xl m-5 lg:m-0 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">
            Register your company on our platform
          </h5>
          {error && <p className="text-red-700 text-center">{error}</p>}

          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Comapany Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              Confirm password
            </label>
            <input
              type="password"
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
              for="location"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={data.location}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div>
            <label
              for="phoneNumber"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Comapany Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div>
            <label
              for="details"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Comapany Details
            </label>
            <textarea
              name="details"
              id="details"
              cols="30"
              rows="5"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="image"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) =>
                setData({ ...data, imageUrl: e.target.files[0] })
              }
            />
          </div>

          <div class="flex items-start"></div>
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

export default PlasticDealer;
