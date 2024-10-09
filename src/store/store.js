import { create } from "zustand";
import { publicApiGet } from "../lib/api";
import DATA from "../data.json"
export const useItemListStore = create((set) => ({
  bears: 0,
  list: {},
  // getCatergoryList: () => set((state) => ({ bears: state.bears + 1 })),
  fetchCatergoryList: async (data) => {
    return publicApiGet(DATA).then((res) => {
      console.log(res) 
      return res;
    });
  },
}));
