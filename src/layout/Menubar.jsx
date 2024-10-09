import {
  Coffee,
  House,
  SquareStack,
  MessageSquareText,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    title: "Home",
    icon: <House />,
    value: "/",
  },
  {
    title: "Category",
    icon: <SquareStack />,
    value: "/",
  },
  {
    title: "Chat",
    icon: <MessageSquareText />,
    value: "/",
  },
  {
    title: "Cart",
    icon: <ShoppingCart />,
    value: "/cart",
  },
  {
    title: "Profile",
    icon: <UserRound />,
    value: "/profile",
  },
];

function Menubar() {
  const navigate = useNavigate();

  const goPages = (page) => {
    navigate(page);
  };

  return (
    <footer className="fixed h-[--bottom-height] bottom-0 w-full bg-white border-t p-2 shadow-inner rounded-tl-2xl rounded-tr-2xl">
      <ul className="flex">
        {DATA.map((items, index) => {
          const { title, value, icon } = items;
          return (
            <li
              className="flex-1 flex flex-col items-center justify-center"
              key={items.title}
              onClick={() => goPages(value)}
            >
              {icon}
              <span className="text-xs">{title}</span>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Menubar;
