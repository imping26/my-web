import React from "react";
import CatergoryList from "./View/CatergoryList";
import OfficialStore from "./View/OfficialStore";
import RecommendList from "./View/RecommendList";

function CatergoryPages() {
  return (
    <div className="flex">
      <div className="w-1/5 bg-stone-100 px-2 py-1">
        <CatergoryList />
      </div>
      <div className="w-4/5 px-2 py-1">
        <OfficialStore />
        <RecommendList />
      </div>
    </div>
  );
}

export default CatergoryPages;
