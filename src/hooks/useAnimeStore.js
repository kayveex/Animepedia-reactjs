/* eslint-disable no-unused-vars */

import { create } from "zustand";
import axios from "axios";
import getAnimeResponse from "../services/api-call";

const useAnimeStore = create((set) => ({
    animeData: [],
    isLoading: false,
    isError: false,
    fetchAnime: async(resource, query) => {
      set({ isLoading: true, isError: false });

      try {
        const anime = await getAnimeResponse({ resource, query });
        set({ animeData: anime, isLoading: false });
      } catch (error) {
        set({ isError: true, isLoading: false });
        console.error("Error fetching anime data:", error);
      }
    },
  }));

export default useAnimeStore;