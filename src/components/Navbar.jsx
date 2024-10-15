import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ title = "", backTo, rightComponent: RightComponent }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(backTo ? backTo : "/");
  };
  return (
    <div className="h-12 bg-theme p-3 flex items-center justify-between">
      <div onClick={goBack}>
        <span>
          <ChevronLeft className="text-white" size={32} />
        </span>
      </div>
      <div className="flex flex-2 items-center p-2">
        <p className="text-white font-semibold">{title}</p>
      </div>
      <div className="">{RightComponent && <RightComponent />}</div>
    </div>
  );
}

export default Navbar;
