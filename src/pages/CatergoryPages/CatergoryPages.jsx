import React from "react";
import CatergoryList from "./View/CatergoryList";
import OfficialStore from "./View/OfficialStore";
import WrapContent from "../../components/WrapContent";
import TopSearchNavbar from "../../components/TopSearchNavbar";
import { UserRound } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useItemStore } from "../../store/useItemStore";
import { useNavigate } from "react-router-dom";

const UserProfileIcon = () => {
  const navigate = useNavigate();
  const goProfile = () => {
    navigate("/profile");
  };
  return (
    <div onClick={goProfile}>
      <div className="border rounded-full p-[3px]">
        <UserRound className="text-white" />
      </div>
    </div>
  );
};

function CatergoryPages() {
  const store = useItemStore();
  useQuery({
    queryKey: ["catergorylist"],
    queryFn: () => store.fetchCatergoryList({ category: "MOBILE_TABLET" }),
  });
  return (
    <WrapContent>
      <TopSearchNavbar rightComponent={UserProfileIcon} theme />
      <div className="flex">
        <div className="w-1/5 bg-stone-100 px-2 py-1">
          <CatergoryList />
        </div>
        <div className="w-4/5 px-2 pt-1">
          <OfficialStore data={store.list} />
          {/* <RecommendList /> */}
        </div>
      </div>
    </WrapContent>
  );
}

export default CatergoryPages;
