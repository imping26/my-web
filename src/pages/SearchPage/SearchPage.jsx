import React from "react";
import WrapContent from "../../components/WrapContent";
import TopSearchNavbar from "../../components/TopSearchNavbar";
import Filterbar from "./View/Filterbar";
import ListContent from "./View/ListContent";
import FilterPage from "../FilterPage/FilterPage";
import useFilterSideBarStore from "../../store/useFilterSideBarStore";

function SearchPage() {
  const { isOpen } = useFilterSideBarStore();
  return (
    <WrapContent className={isOpen ? "overflow-y-hidden" : null}>
      <TopSearchNavbar />
      <Filterbar />
      <ListContent />
      <FilterPage />
    </WrapContent>
  );
}

export default SearchPage;
