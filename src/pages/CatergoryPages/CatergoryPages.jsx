import React from "react";
import CatergoryList from "./View/CatergoryList";
import OfficialStore from "./View/OfficialStore";
import RecommendList from "./View/RecommendList";
import WrapContent from "../../components/WrapContent";
import TopSearchNavbar from "../../components/TopSearchNavbar";
import { UserRound } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import { useItemListStore } from "../../store/store";

const data = {
  data: {
    result: [
      {
        id: 3301,
        name: "Mobile Phones",
        logo: null,
        image: null,
        level: 2,
        hasChildren: true,
        children: [
          {
            id: 33011,
            name: "Mobile Phoneswqeqweqweqwe",
            logo: null,
            image: "washer.png",
            level: 3,
            hasChildren: false,
          },
          {
            id: 33012,
            name: "Mobile Phones",
            logo: null,
            image: "washer.png",
            level: 3,
            hasChildren: false,
          },
          {
            id: 33013,
            name: "Mobile Phones",
            logo: null,
            image: "washer.png",
            level: 3,
            hasChildren: false,
          },
          {
            id: 33014,
            name: "Mobile Phones",
            logo: null,
            image: "washer.png",
            level: 3,
            hasChildren: false,
          },
        ],
      },
      {
        id: 3302,
        name: "Mobile Accessories",
        logo: null,
        image: null,
        level: 2,
        hasChildren: true,
        children: [
          {
            id: 33021,
            name: "Mobile Accessories",
            logo: null,
            image: "washer.png",
            level: 3,
            hasChildren: false,
          },
        ],
      },
      {
        id: 3303,
        name: "Tablets",
        logo: null,
        image: null,
        level: 2,
        hasChildren: true,
        children: [
          {
            id: 33031,
            name: "Tablets",
            logo: null,
            image: "washer.png",
            level: 3,
            hasChildren: false,
          },
        ],
      },
      {
        id: 3304,
        name: "Tablet Accessories",
        logo: null,
        image: null,
        level: 2,
        hasChildren: true,
        children: [
          {
            id: 33041,
            name: "Tablet Accessories",
            logo: null,
            image: "washer.png",
            level: 3,
            hasChildren: false,
          },
        ],
      },
    ],
  },
};

const UserProfileIcon = () => {
  return (
    <div className="">
      <div className="border rounded-full p-[3px]">
        <UserRound className="text-white" />
      </div>
    </div>
  );
};

function CatergoryPages() {
  // const fetchCatergoryList = useItemListStore((state) => state.fetchCatergoryList);

  // const { data, isPending, isError, error } = useQuery({
  //   queryKey: ["categoryData"],
  //   queryFn: fetchCatergoryList,
  // });

  // if (isPending) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  return (
    <WrapContent>
      <TopSearchNavbar rightComponent={UserProfileIcon} theme />
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
