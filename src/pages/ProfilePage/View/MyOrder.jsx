import React from "react";
import {
  ChevronRight,
  Wallet,
  Truck,
  Package,
  MessageSquareMore,
  SendToBack,
} from "lucide-react";

const DATA = [
  {
    title: "To pay",
    icon: <Wallet />,
  },
  {
    title: "To ship",
    icon: <Truck />,
  },
  {
    title: "To Receive",
    icon: <Package />,
  },
  {
    title: "To Review",
    icon: <MessageSquareMore />,
  },
  {
    title: "Return",
    icon: <SendToBack />,
  },
];

function MyOrder() {
  return (
    <div className="px-5 bg-stone-100 ">
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <div className="h-4 w-1 bg-theme mr-1"></div>
          <p className="font-semibold text-xs">MY ORDERS</p>
        </div>
        <div className="flex items-center text-sky-500 text-xs">
          View all Order <ChevronRight size={16} />
        </div>
      </div>
      <div className="flex gap-3">
        {DATA.map((items, index) => {
          const { title, icon } = items;
          return (
            <div key={index} className="text-center flex-1 py-4">
              <div className="flex flex-col items-center gap-1">
                <div className="border border-theme rounded-full p-2 flex justify-center">
                  {icon}
                </div>
                <p className="text-xs font-semibold whitespace-nowrap">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrder;
