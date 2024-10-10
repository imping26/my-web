import React from "react";
import WrapContent from "../../components/WrapContent";
import TopSearchNavbar from "../../components/TopSearchNavbar";
import Filterbar from "./View/Filterbar";
import ListContent from "./View/ListContent";
import FilterPage from "../FilterPage/FilterPage";

function SearchPage() {
  return (
    <WrapContent>
      <TopSearchNavbar />
      <Filterbar />
      <ListContent />
      <FilterPage />
      <div>Search</div>
    </WrapContent>
  );
}

export default SearchPage;
