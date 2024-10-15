import React from "react";
import {
  ChevronRight,
  TableOfContents,
  MapPinHouse,
  LockKeyhole,
  MessageCircleQuestion,
  Book,
} from "lucide-react";

const DATA1 = [
  {
    title: "Account Information",
    icon: <TableOfContents />,
  },
  {
    title: "My Address",
    icon: <MapPinHouse />,
  },
  {
    title: "Privacy Policy",
    icon: <LockKeyhole />,
  },
  {
    title: "Help Centre",
    icon: <MessageCircleQuestion />,
  },
  {
    title: "Term of use",
    icon: <Book />,
  },
];

function AccountDetails() {
  return (
    <div>
      {DATA1.map((items, index) => {
        const { title, icon } = items;
        return (
          <div
            key={index}
            className="p-3 flex items-center justify-between h-14 bg-white"
          >
            <div className="flex gap-2">
              {icon}
              <p className="text-sm">{title}</p>
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
