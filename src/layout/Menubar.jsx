import { Coffee } from "lucide-react";
import React from "react";

const DATA = [
  {
    title: "Home",
    icon: "",
    value: "",
  },
  {
    title: "Category",
    icon: "",
    value: "",
  },
  {
    title: "Chat",
    icon: "",
    value: "",
  },
  {
    title: "Cart",
    icon: "",
    value: "",
  },
  {
    title: "Profile",
    icon: "",
    value: "",
  },
];

function Menubar() {
  return (
    <div>
      <ul className="flex border-t p-2 shadow-inner">
        {DATA.map((items) => {
          const { title } = items;
          return <li className="flex-1 flex flex-col items-center justify-center" key={items.title}> <Coffee size={24} className="text-green-500" /><span className="text-xs">{title}</span></li>;
        })}
      </ul>
    </div>
  );
}

export default Menubar;
