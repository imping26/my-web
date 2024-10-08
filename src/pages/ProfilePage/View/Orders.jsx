import React from "react";
import { ChevronRight, Wallet } from "lucide-react";
const DATA = [
  {
    title: "To pay",
  },
  {
    title: "To ship",
  },
  {
    title: "To Receive",
  },
  {
    title: "To Review",
  },
  {
    title: "Return",
  },
];
function Orders() {
  return (
    <div className="px-5 bg-stone-100 ">
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <div className="h-4 w-1 bg-theme mr-1"></div>
          <span className="font-semibold text-sm">MY ORDERS</span>
        </div>

        <div className="flex items-center text-sky-500 text-sm">
          View all Order <ChevronRight size={16} />
        </div>
      </div>

      <div className="flex gap-3">
        {DATA.map((items, index) => {
          const { title } = items;
          return (
            <div key={index} className="text-center flex-1 py-2 ">
              <div className="flex flex-col items-center gap-1">
                <div className="border border-theme rounded-full p-2 flex justify-center">
                  <Wallet />
                </div>
                <span className="text-sm font-semibold whitespace-nowrap">
                  {title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
