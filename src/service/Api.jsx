import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://www.omdbapi.com/`,
    timeout: 5000,
    headers: {
        "Content-Type":"application/json"
    },
});

export const getMovieData = (searchKeyWord) => {
  return axiosInstance.get("", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      s: searchKeyWord,
    },
  });
};