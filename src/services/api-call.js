/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";

const getAnimeResponse = async ({ resource, query }) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/${resource}?q=${query}`);
    const anime = await response.json();
    return anime;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    throw error; // Re-throw the error for further handling
  }
};

export default getAnimeResponse;