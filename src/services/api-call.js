/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";


const getAnimeResponse = async ({ resource, query }) => {
  const baseURL = "https://api.jikan.moe/v4";
  try {
    const response = await axios.get(`${baseURL}/${resource}?q=${query}`);
    const anime = response.data;
    return anime;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    throw error; // Re-throw the error for further handling
  }
};

export default getAnimeResponse;