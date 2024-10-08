import { ChevronLeft, Search, UserRound } from "lucide-react";
import React from "react";

function TopSearchNavbar() {
  return (
    <div className="h-18 bg-theme p-3 pt-5 flex items-center justify-between">
      <div>
        <span>
          <ChevronLeft className="text-white" size={32} />
        </span>
      </div>
      <div className="flex flex-2 items-center bg-white rounded-md p-2 h-10">
        <span>
          <Search />
        </span>
        <div className="pl-2">
          <input
            className="rounded-md focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="bg-theme py-1 px-2 rounded-md text-white">
          Search
        </button>
      </div>
      <div className="">
        <div className="border rounded-full p-[3px]">
          <UserRound className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default TopSearchNavbar;
