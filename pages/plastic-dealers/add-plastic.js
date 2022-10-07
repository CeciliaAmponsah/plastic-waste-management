import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Addplastic = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/plastics`,
        data
      );
      router.push("/plastics-dealers");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h3>Addplastic</h3>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <div>
          <label htmlFor="title"> Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={data.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Add plastic</button>
      </form>
    </div>
  );
};

export default Addplastic;
