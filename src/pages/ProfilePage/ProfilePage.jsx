import React from "react";
import WrapContent from "../../components/WrapContent";
import Navbar from "../../components/Navbar";
import { ChevronRight } from "lucide-react";
import UserInfo from "./View/UserInfo";
import Orders from "./View/Orders";
import AccountDetails from "./View/AccountDetails";

const InfoMemberShip = () => {
  return (
    <div className="flex bg-white rounded-lg my-4 mx-5 items-center py-4 px-2">
      <div>
        View your order information and other with PlusOne membership detials
      </div>
      <div className="">
        <ChevronRight size={28} />
      </div>
    </div>
  );
};

function ProfilePage() {
  return (
    <WrapContent className="bg-stone-200">
      <Navbar title="Account details" />
      <UserInfo />
      <InfoMemberShip />
      <Orders />
      <AccountDetails />
    </WrapContent>
  );
}

export default ProfilePage;
