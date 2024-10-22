import { ArrowUp, ArrowDown, SlidersHorizontal } from "lucide-react";
import React from "react";
import useFilterSideBarStore from "../../../store/useFilterSideBarStore";
import { useItemStore } from "../../../store/useItemStore";

function Filterbar() {
  const { openFilterSideBar } = useFilterSideBarStore();

  const { lowestPrice, togglePrice } = useItemStore();

  const priceToggleHandler = () => {
    togglePrice();
  };

  // const toggleSellingHandler = () => {
  //   toggleSelling();
  // };

  return (
    <div className="flex py-2 px-5 justify-between">
      <button
        className="justify-center flex items-center"
        onClick={priceToggleHandler}
      >
        <p>Price</p>
        <div>
          {lowestPrice ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
        </div>
      </button>
      {/* <button
        className="flex-1 justify-center flex items-center gap-2"
        onClick={toggleSellingHandler}
      >
        <span>Top selling</span>
        <div>
          {lowestSelling ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
        </div>
      </button> */}
      <button
        onClick={openFilterSideBar}
        className="justify-center flex items-center gap-2"
      >
        <div>
          <SlidersHorizontal size={12} />
        </div>
        <p>Filter</p>
      </button>
    </div>
  );
}

export default Filterbar;
