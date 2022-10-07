import axios from "axios";


export const getPlastics = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/plastics`
  );
  const plastics = await res.data.plastics;

  if (id) {
    const plastic = plastic.find((plastic) => plastic._id == id);
    return plastic;
  }

  return plastics;
};
