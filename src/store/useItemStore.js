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

export const useItemStore = create((set, get) => ({
  sidebarItemList: sidebarList,
  lowestPrice: false,
  lowestSelling: false,
  list: {},
  searchPageList: {},
  cartList: [],
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
    const response = await publicApiPost(
      "http://localhost:3000/itemCatergoryList",
      data
    );
    set({ list: response });
    return response;
  },
  fetchItemList: async (data) => {
    const response = await publicApiPost(
      "http://localhost:3000/itemsdisplaylist",
      data
    );
    set({ searchPageList: response });
    return response;
  },
  fetchItemDetails: async (data) => {
    const response = await publicApiPost(
      "http://localhost:3000/itemsdetail",
      data
    );
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
  addToCart: (items) =>
    set((state) => {
      const existingItemIndex = [...state.cartList].findIndex(
        (i) => Number(i.id) === Number(items.id)
      );
      if (existingItemIndex !== -1) {
        const udpateCart = [...state.cartList];
        udpateCart[existingItemIndex] = {
          ...udpateCart[existingItemIndex],
          quantity: (udpateCart[existingItemIndex].quantity || 1) + 1,
        };
        return { cartList: udpateCart };
      } else {
        const newItem = { ...items, quantity: 1 };
        const newCartList = [...state.cartList, newItem];
        return { cartList: newCartList };
      }
    }),
  // addItem: (item) =>
  //   set((state) => {
  //     const existIndex = [...state.cartList].findIndex((i) => i.id === item.id);
  //     if (existIndex !== -1) {
  //       const udpateAddCart = [...state.cartList];
  //       if (udpateAddCart[existIndex].quantity > 0) {
  //         udpateAddCart[existIndex].quantity++;
  //       }
  //       return { cartList: udpateAddCart };
  //     } else {
  //       console.log("don have this item");
  //     }
  //   }),
  // removeItem: (item) =>
  //   set((state) => {
  //     const existIndex = [...state.cartList].findIndex((i) => i.id === item.id);
  //     if (existIndex !== -1) {
  //       const udpateAddCart = [...state.cartList];

  //       if (udpateAddCart[existIndex].quantity <= 1) {
  //         const deletCart = udpateAddCart.filter(
  //           (i) => i.id !== udpateAddCart[existIndex].id
  //         );
  //         return { cartList: deletCart };
  //       }

  //       if (udpateAddCart[existIndex].quantity > 0) {
  //         udpateAddCart[existIndex].quantity--;
  //       }
  //       return { cartList: udpateAddCart };
  //     }
  //   }),

  addItem: (item) =>
    set((state) => {
      const existingItemIndex = state.cartList.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedCart = state.cartList.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { cartList: updatedCart };
      } else {
        console.log("Item not found in cart");
        return state; // Return unchanged state if item not found
      }
    }),

  removeItem: (item) =>
    set((state) => {
      const existingItemIndex = state.cartList.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedCart = state.cartList.reduce((acc, cartItem) => {
          if (cartItem.id === item.id) {
            if (cartItem.quantity > 1) {
              acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
            }
            // if quantity is 1, item will be removed by not including it
          } else {
            acc.push(cartItem);
          } 
          return acc;
        }, []);
        return { cartList: updatedCart };
      }
      return state; // return unchanged state if item not found
    }),


}));
