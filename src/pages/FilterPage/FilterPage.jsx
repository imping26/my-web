import React, { useState } from "react";
import { cn } from "../../lib/utils";
import useFilterSideBarStore from "../../store/useFilterSideBarStore";

function FilterPage() {
  const { isOpen, closeFilterSideBar } = useFilterSideBarStore();
  const [filterData, setFilterData] = useState({
    priceRangeMin: "",
    priceRangeMax: "",
    inStock: false,
    categories: [],
    rating: null,
  });

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
    console.log("Filter data submitted:", filterData);
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
          "z-20 fixed top-0 h-screen w-10/12 bg-white shadow-2xl ease-out delay-150 duration-300 flex flex-col justify-between",
          isOpen ? "right-0" : "-right-96"
        )}
      >
        <div className="pt-10 px-3 flex flex-col gap-6 overflow-y-auto">
          <div>
            <div className="pb-2">Price Range</div>
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

          <div>
            <div className="pb-2">In Stock</div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filterData.inStock}
                onChange={(e) => handleInputChange(e, "inStock")}
                className="mr-2"
              />
              <span>In stock only</span>
            </label>
          </div>

          <div>
            <div className="pb-2">Category</div>
            <div className="grid grid-cols-12 gap-2">
              {["Iphone", "AI Enabled"].map((category) => (
                <div key={category} className="col-span-4">
                  <button
                    className={cn(
                      "px-5 py-1 h-[30px] rounded-sm w-full text-sm",
                      filterData.categories.includes(category)
                        ? "bg-theme text-white"
                        : "bg-stone-200 text-stone-400"
                    )}
                    onClick={() => handleCategoryToggle(category)}
                  >
                    <span className="line-clamp-1">{category}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="pb-1">Rating</div>
            <div className="flex flex-col">
              {[5, 4, 3, 2, 1].map((star) => {
                return (
                  <label
                    key={star}
                    className="flex items-center font-semibold pt-1"
                  >
                    <input
                      type="radio"
                      value={star}
                      checked={filterData.rating === star}
                      onChange={(e) => handleInputChange(e, "rating")}
                      className="mr-2 checked:bg-red-400"
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
      <div
        onClick={closeFilterSideBar}
        className={cn(
          "lg:hidden fixed top-0 right-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 duration-150",
          isOpen ? "opacity-100 block z-10" : "opacity-0 hidden"
        )}
      ></div>
    </div>
  );
}

export default FilterPage;
