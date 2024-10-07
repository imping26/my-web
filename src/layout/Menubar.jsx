import { Coffee } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    title: "Home",
    icon: "",
    value: "/",
  },
  {
    title: "Category",
    icon: "",
    value: "/",
  },
  {
    title: "Chat",
    icon: "",
    value: "/",
  },
  {
    title: "Cart",
    icon: "",
    value: "/cart",
  },
  {
    title: "Profile",
    icon: "",
    value: "/profile",
  },
];

function Menubar() {

  const navigate = useNavigate();  

  const goPages = (page) => {
    navigate(page); 
  };

  return (
    <footer>
      <ul className="flex fixed bottom-0 w-full bg-white border-t p-2 shadow-inner rounded-tl-2xl rounded-tr-2xl">
        {DATA.map((items) => {
          const { title, value } = items;
          return (
            <li
              className="flex-1 flex flex-col items-center justify-center"
              key={items.title}
              onClick={() => goPages(value)}
            >
              <Coffee size={24} className="text-green-500" />
              <span className="text-xs">{title}</span>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Menubar;
