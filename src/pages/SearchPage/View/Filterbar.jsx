import { ArrowUp, ArrowDown, SlidersHorizontal } from "lucide-react";
import React from "react";
import useFilterSideBarStore from "../../../store/useFilterSideBarStore";



function Filterbar() {

  const {openFilterSideBar} = useFilterSideBarStore()

  return (
    <div className="flex py-2">
      <button className="flex-1 justify-center flex items-center gap-2">
        <span>Price</span>
        <div>
          <ArrowDown size={12} />
          {/* <ArrowUp size={12} /> */}
        </div>
      </button>
      <button className="flex-1 justify-center flex items-center gap-2">
        <span>Top selling</span>
        <div>
          <ArrowDown size={12} />
          {/* <ArrowUp size={12} /> */}
        </div>
      </button>

      <button onClick={openFilterSideBar} className="flex-1 justify-center flex items-center gap-2">
        <div>
          <SlidersHorizontal size={12} />
        </div>
        <span>Filter</span>
      </button>
    </div>
  );
}

export default Filterbar;
