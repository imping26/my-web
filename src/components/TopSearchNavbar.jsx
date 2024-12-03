import { ChevronLeft, HomeIcon, Search, UserRound } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { useItemStore } from "../store/useItemStore";
function TopSearchNavbar({
  className,
  theme,
  backTo,
  home = false,
  rightComponent: RightComponent,
}) {
  
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const store = useItemStore();

  const goBack = () => {
    navigate(backTo ? backTo : -1);
  };

  const goSearchPage = () => {
    navigate("/search");
  };

  const confirmSearch = () => {
    store.searchItem(searchValue.toLowerCase());
  };

  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
      className={cn(
        "h-18 p-3 pt-5 flex items-center justify-between",
        theme ? "bg-theme" : "bg-white",
        className
      )}
    >
      {home ? (
        <div>
          <span>
            <HomeIcon
              className={theme ? "text-white" : "text-black"}
              size={32}
            />
          </span>
        </div>
      ) : (
        <div onClick={goBack}>
          <span>
            <ChevronLeft
              className={theme ? "text-white" : "text-black"}
              size={32}
            />
          </span>
        </div>
      )}

      <div className="flex flex-2 items-center border-2 bg-white rounded-md p-2 h-10">
        <span>
          <Search className="text-slate-300" />
        </span>
        <div className="pl-2" onClick={goSearchPage}>
          <input
            className="rounded-md focus:outline-none placeholder:text-sm"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={searchValueHandler}
          />
        </div>
        <button
          className="bg-theme py-1 px-2 rounded-md text-white text-sm"
          onClick={confirmSearch}
        >
          Search
        </button>
      </div>
      {/*  */}
      <div>{RightComponent && <RightComponent />}</div>
    </div>
  );
}

export default TopSearchNavbar;
