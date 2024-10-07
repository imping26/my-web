import React from "react";
import CatergoryList from "./CatergoryList";
import OfficialStore from "./OfficialStore";
import RecommendList from "./RecommendList";

function CategoryBody() {
  return (
    <div className="flex">
      <div className="w-1/5 bg-stone-100 px-2 py-1">
        <CatergoryList />
      </div>
      <div className="w-4/5 px-2 py-1">
       <OfficialStore/>
       <RecommendList/>
      </div>
    </div>
  );
}

export default CategoryBody;
