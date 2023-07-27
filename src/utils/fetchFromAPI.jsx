import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    /*Vite doesn't provide a built-in process variable like Node.js so to access .env variables in Vite use import.meta.env instead  of process and variable should start with VITE to become global*/
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios(`${BASE_URL}/${url}`, options);
  /*const response = await axios...   destructuring {data } is done line above*/

  return data;
};
