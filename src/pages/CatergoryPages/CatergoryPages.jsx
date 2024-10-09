import React from "react";
import CatergoryList from "./View/CatergoryList";
import OfficialStore from "./View/OfficialStore";
import RecommendList from "./View/RecommendList";
import WrapContent from "../../components/WrapContent";
import TopSearchNavbar from "../../components/TopSearchNavbar";
import { useQuery } from "@tanstack/react-query";
import { useItemListStore } from "../../store/store";

function CatergoryPages() {
  const fetchCatergoryList = useItemListStore((state) => state.fetchCatergoryList);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categoryData"],
    queryFn: fetchCatergoryList,
  }); 

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <WrapContent>
      <TopSearchNavbar />
      <div className="flex">
        <div className="w-1/5 bg-stone-100 px-2 py-1">
          <CatergoryList />
        </div>
        <div className="w-4/5 px-2 pt-1">
          <OfficialStore data={data} />
          <RecommendList />
        </div>
      </div>
    </WrapContent>
  );
}

export default CatergoryPages;
