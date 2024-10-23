import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import useFilterSideBarStore from "../store/useFilterSideBarStore";
import { useItemStore } from "../store/useItemStore";
import { useProductFilters } from "../hooks/useProductFilter";

const CatergoryList = [
  {
    name: "Digital Gadgets",
    value: "DIGITAL_GADGETS",
  },
  {
    name: "Computer Laptop",
    value: "COMPUTER_LAPTOP",
  },
  {
    name: "Mobile Tabtel",
    value: "MOBILE_TABLET",
  },
];

function FilterSidebar() {
  const { setFilters, filterData, setFilterData } = useProductFilters();

  const { isOpen, closeFilterSideBar } = useFilterSideBarStore();
  // const store = useItemStore();

  const handleInputChange = (e, field) => {
    const { value, type, checked } = e.target;
    setFilterData((prev) => ({
      ...prev,
      [field]: type === "checkbox" ? checked : Number(value),
    }));
  };

  const handleCategoryToggle = (category) => {
    setFilterData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleSubmit = () => {
    // store.fetchItemList({ data: filterData });
    setFilters();
    closeFilterSideBar();
  };

  const handleReset = () => {
    setFilterData({
      priceRangeMin: "",
      priceRangeMax: "",
      inStock: false,
      categories: [],
      rating: null,
    });
  };

  return (
    <div>
      <div
        className={cn(
          "z-20 fixed top-0 h-screen w-10/12 bg-white shadow-2xl ease-in-out delay-100 duration-300 flex flex-col justify-between",
          isOpen ? "right-0" : "-right-96"
        )}
      >
        <div className="pt-10 px-3 flex flex-col gap-6 overflow-y-auto">
          <div>
            <div className="pb-2 font-semibold">Price Range</div>
            <div className="flex w-full">
              <input
                type="number"
                placeholder="Min"
                className="border-2 placeholder:text-sm placeholder:text-center h-[30px] w-1/2 p-2 text-center text-stone-500 bg-stone-200"
                value={filterData.priceRangeMin}
                onChange={(e) => handleInputChange(e, "priceRangeMin")}
              />
              <span className="border-b-2 w-5 my-[10px] mx-[5px] "></span>
              <input
                type="number"
                placeholder="Max"
                className="border-2  placeholder:text-sm placeholder:text-center h-[30px] w-1/2 p-2 text-center text-stone-500 bg-stone-200"
                value={filterData.priceRangeMax}
                onChange={(e) => handleInputChange(e, "priceRangeMax")}
              />
            </div>
          </div>
          {/*  */}
          <div>
            <div className="pb-2 font-semibold">In Stock</div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filterData.inStock}
                onChange={(e) => handleInputChange(e, "inStock")}
                className="mr-2 accent-theme"
              />
              <span>In stock only</span>
            </label>
          </div>
          {/*  */}
          <div>
            <div className="pb-2 font-semibold">Category</div>
            <div className="grid grid-cols-12 gap-2">
              {CatergoryList.map((category) => (
                <div key={category.value} className="col-span-4">
                  <button
                    className={cn(
                      "px-2 py-1 h-[30px] rounded-sm w-full text-sm",
                      filterData.categories.includes(category.value)
                        ? "bg-theme text-white"
                        : "bg-stone-200 text-stone-400"
                    )}
                    onClick={() => handleCategoryToggle(category.value)}
                  >
                    <span className="line-clamp-1">{category.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div>
            <div className="pb-1 font-semibold">Rating</div>
            <div className="flex flex-col">
              {[5, 4, 3, 2, 1].map((star) => {
                return (
                  <label key={star} className="flex items-center pt-1">
                    <input
                      type="radio"
                      value={star}
                      checked={filterData.rating === star}
                      onChange={(e) => handleInputChange(e, "rating")}
                      className="mr-2 accent-theme"
                    />
                    {star} Star{star !== 1 && "s"} {star !== 5 && "& Up"}
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-3 flex gap-3">
          <button
            onClick={handleReset}
            className="p-3 border border-stone-400 rounded-md flex-1"
          >
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="p-3 bg-theme text-white rounded-md flex-1"
          >
            Confirm
          </button>
        </div>
      </div>
      {/*filter sidebar overlay */}
      <div
        onClick={closeFilterSideBar}
        className={cn(
          "lg:hidden fixed top-0 right-0 w-screen h-screen bg-gray-900 bg-opacity-30 transition duration-300",
          isOpen ? "opacity-100 block z-10" : "opacity-0 hidden"
        )}
      ></div>
    </div>
  );
}

export default FilterSidebar;
