import React, { useState } from "react";
import WrapContent from "../../components/WrapContent";
import TopSearchNavbar from "../../components/TopSearchNavbar";
import Filterbar from "./View/Filterbar";
import ListContent from "./View/ListContent";
import useFilterSideBarStore from "../../store/useFilterSideBarStore";
import { Grid2x2, List } from "lucide-react";

const SwitchDisplayStyle = ({ isGrid, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-gray-200 transition-colors"
    >
      {isGrid ? <List size={24} /> : <Grid2x2 size={24} />}
    </button>
  );
};

function SearchPage() {
  const [isGrid, setIsGrid] = useState(true);
  const { isOpen } = useFilterSideBarStore();

  const handleToggleView = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <WrapContent className={isOpen ? "overflow-y-hidden" : null}>
      <TopSearchNavbar
        backTo={"/catergory"}
        rightComponent={() => (
          <SwitchDisplayStyle isGrid={isGrid} onToggle={handleToggleView} />
        )}
      />
      <Filterbar />
      <ListContent isGrid={isGrid} />
    </WrapContent>
  );
}

export default SearchPage;
