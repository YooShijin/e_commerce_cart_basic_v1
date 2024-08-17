import axios from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProducts = async (query) => {
  const res = await axios.get(URL);
  return res.data;
};
