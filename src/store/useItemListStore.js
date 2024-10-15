import { create } from "zustand";
import { publicApiGet, publicApiPost } from "../lib/api";
import { TabletSmartphone, Laptop, MonitorSmartphone } from "lucide-react";

const sidebarList = [
  {
    title: "Mobile & Tablets",
    value: "MOBILE_TABLET",
    isSelected: true,
    icon: TabletSmartphone,
  },
  {
    title: "Digital Gadget",
    value: "DIGITAL_GADGETS",
    isSelected: false,
    icon: MonitorSmartphone,
  },
  {
    title: "Computers & Laptop",
    value: "COMPUTER_LAPTOP",
    isSelected: false,
    icon: Laptop,
  },
];

export const useItemListStore = create((set, get) => ({
  sidebarItemList: sidebarList,
  lowestPrice: false,
  lowestSelling: false,
  list: {},
  searchPageList: {},
  setList: (list) => set({ list }),
  togglePrice: () => {
    const currentLowestPrice = get().lowestPrice;
    const { result } = get().searchPageList;

    const sortedList = result.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return currentLowestPrice ? priceB - priceA : priceA - priceB;
    });

    set((state) => ({
      lowestPrice: !state.lowestPrice,
      searchPageList: { result: sortedList },
    }));
  },
  toggleSelling: async () => {
    set({ lowestSelling: !get().lowestSelling });
  },
  fetchCatergoryList: async (data) => {
    const response = await publicApiPost("http://localhost:3000/items", data);
    set({ list: response });
    return response;
  },
  fetchItemDetails: async (data) => {
    const response = await publicApiPost(
      "http://localhost:3000/itemsdetail",
      data
    );
    set({ searchPageList: response });
    return response;
  },
  selectCategoryList: async (category) => {
    await get().sidebarItemList.forEach((item) => {
      if (item.value === category) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    await get().fetchCatergoryList({ category });
  },
}));
