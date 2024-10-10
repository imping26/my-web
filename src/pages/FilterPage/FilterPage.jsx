import React from "react";
import { cn } from "../../lib/utils";
import useFilterSideBarStore from "../../store/useFilterSideBarStore";

function FilterPage() {
  const { isOpen, closeFilterSideBar } = useFilterSideBarStore();

  return (
    <div>
      <div
        className={cn(
          "z-20 fixed top-0 h-screen w-9/12 bg-white shadow-2xl ease-out delay-150 duration-300 flex flex-col justify-between",
          isOpen ? "right-0" : "-right-96"
        )}
      >
        <div className="pt-10 px-3 flex flex-col gap-5">
          <div>
            <div className="pb-1">Price Range</div>
            <div className="flex w-full">
              <input type="text" className="border-2 border-stone-400 w-1/2" />
              <span className="border-b-2 w-5 my-[10px] mx-[5px]"></span>
              <input type="text" className="border-2 border-stone-400 w-1/2" />
            </div>
          </div>

          <div>
            <div className="pb-1">In Stock</div>
            <div className="grid grid-cols-12 gap-2">
              <button className="col-span-4 px-5 py-1 bg-stone-200 rounded-sm">
                <span className="text-stone-400 text-sm">In stock</span>
              </button>
            </div>
          </div>

          <div>
            <div className="pb-1">Category</div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4">
                <button className="px-5 py-1 bg-stone-200 rounded-sm">
                  <span className="text-stone-400 line-clamp-1">Iphone</span>
                </button>
              </div>
              <div className="col-span-4">
                <button className="px-5 py-1 bg-stone-200 rounded-sm">
                  <span className="text-stone-400 line-clamp-1">
                    AI Enabled
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="pb-1">Rating</div>
            <div className="flex flex-col">
              <label>
                <input type="radio" value="option1" checked={true} />5 Star
              </label>
              <label>
                <input type="radio" value="option1" checked={true} />4 Star & Up
              </label>
              <label>
                <input type="radio" value="option1" checked={true} />3 Star & Up
              </label>
              <label>
                <input type="radio" value="option1" checked={true} />2 Star & Up
              </label>
              <label>
                <input type="radio" value="option1" checked={true} />1 Star & Up
              </label>
            </div>
          </div>
        </div>

        <div className="p-3 flex gap-3">
          <button className="p-3 border border-stone-400   rounded-md flex-1">
            Reset
          </button>
          <button className="p-3 bg-theme text-white rounded-md flex-1">
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
