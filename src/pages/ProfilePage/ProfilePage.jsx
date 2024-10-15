import React from "react";
import WrapContent from "../../components/WrapContent";
import Navbar from "../../components/Navbar";
import { ChevronRight, UserRound } from "lucide-react";
import UserInfo from "./View/UserInfo";
import MyOrder from "./View/MyOrder";
import AccountDetails from "./View/AccountDetails";

const InfoMemberShip = () => {
  return (
    <div className="flex bg-white rounded-lg my-4 mx-5 items-center p-4 text-sm">
      <p>
        View your order information and other with PlusOne membership detials
      </p>
      <div>
        <ChevronRight size={28} />
      </div>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="border rounded-full p-[3px]">
      <UserRound className="text-white" />
    </div>
  );
};

function ProfilePage() {
  return (
    <WrapContent className="bg-stone-200">
      <Navbar title="Account details" rightComponent={UserProfile} />
      <UserInfo />
      <InfoMemberShip />
      <MyOrder />
      <AccountDetails />
    </WrapContent>
  );
}

export default ProfilePage;
