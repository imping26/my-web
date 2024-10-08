import React from "react";
import {
  ChevronRight,
  CircleUserRound, 
} from "lucide-react";

function UserInfo() {
  return (
    <>
      <div className="flex items-center bg-gradient-to-b from-[#e4121b] to-[#ba131a] h-28 px-4 gap-3">
        <div className="">
          <CircleUserRound size={64} className="text-white font-bold" />
        </div>
        <div className="">
          <span className="text-white text-lg font-semibold">TESTER123</span>
        </div>
      </div>

      <div className="bg-white py-3">
        <div className="flex">
          <div className="flex flex-col text-center flex-1 font-bold">
            <span className="font-semibold">2</span>
            <p>My wishlist</p>
          </div>

          <div className="flex flex-col text-center flex-1 font-bold">
            <span className="font-semibold">2</span>
            <p>My wishlist</p>
          </div>

          <div className="flex flex-col text-center flex-1 font-bold">
            <span className="font-semibold">2</span>
            <p>My wishlist</p>
          </div>
        </div>

       
      </div>
    </>
  );
}

export default UserInfo;
