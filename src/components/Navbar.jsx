import { ChevronLeft, UserRound } from "lucide-react";
import React from "react";

function Navbar({ title = "" }) {
  return (
    <div className="h-18 bg-theme p-3 flex items-center justify-between">
      <div>
        <span>
          <ChevronLeft className="text-white" size={32} />
        </span>
      </div>
      <div className="flex flex-2 items-center p-2">
        <span className="text-white font-semibold">{title}</span>
      </div>
      <div className="">
        <div className="border rounded-full p-[3px]">
          <UserRound className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
