import React from "react";
import {
  ChevronRight,
  CircleUserRound,
  Wallet,
  MessageCircleMore,
} from "lucide-react";

const DATA1 = [
  {
    title: "Account Information",
  },
  {
    title: "My Address",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Help Centre",
  },
  {
    title: "Term of use",
  },
];

function AccountDetails() {
  return (
    <div>
      {DATA1.map((items, index) => {
        const { title } = items;
        return (
          <div key={index} className="p-3 flex justify-between h-14 bg-white">
            <div className="flex gap-2">
              <MessageCircleMore />
              <div>{title}</div>
            </div>
            <div>
              <ChevronRight />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AccountDetails;
