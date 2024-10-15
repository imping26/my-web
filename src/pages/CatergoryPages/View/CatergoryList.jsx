import React from "react"; 
import useItemList from "../../../hooks/useItemList";
import { cn } from "../../../lib/utils";

const ListItem = ({ item, select }) => {
  const { title, icon: Icon, value, isSelected } = item;
  return (
    <div
      className={"flex flex-col items-center py-2 "}
      onClick={() => select(value)}
    >
      <div
        className={cn(
          "p-2 rounded-full border border-slate-300 ",
          isSelected ? "text-theme" : "text-green-500"
        )}
      >
        <Icon />
      </div>
      <p className="text-center text-xs pt-1">{title}</p>
    </div>
  );
};

function CatergoryList() {
  const { selectCategoryList , sidebarItemList } = useItemList();
  const handleSelect = (category) => {
    selectCategoryList(category);
  };
  return (
    <div className="sticky top-0">
      {sidebarItemList.map((item, index) => {
        return <ListItem key={index} item={item} select={handleSelect} />;
      })}
    </div>
  );
}

export default CatergoryList;
