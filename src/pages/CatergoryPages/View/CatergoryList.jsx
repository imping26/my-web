import React from "react";
import { 
  TabletSmartphone,
  HousePlug,
  CarFront,
  Baby,
  Carrot,
  CookingPot,
} from "lucide-react";

const ITEM = [
  {
    title: "Digital Gadget",
    value: "",
    icon: <TabletSmartphone />,
  },
  {
    title: "Home Appliances",
    value: "",
    icon: <HousePlug />,
  },
  {
    title: "Automobile",
    value: "",
    icon: <CarFront />,
  },
  {
    title: "Toys",
    value: "",
    icon: <Baby />,
  },
  {
    title: "Groceries",
    value: "",
    icon: <Carrot />,
  },
  {
    title: "Kitchen Utensils",
    value: "",
    icon: <CookingPot />,
  },
];

const ListItem = ({ item }) => {
  const { title, icon } = item;
  return (
    <div className="flex flex-col items-center py-2">
      <div className="p-2 rounded-full border border-slate-300 text-green-500">
        {icon}
        {/* <Coffee size={32} className="text-green-500" /> */}
        {/* <img className="w-[32px] h-[32px] rounded-full" src={image} alt="" /> */}
      </div>
      <p className="text-center text-xs pt-1">{title}</p>
    </div>
  );
};

function CatergoryList() {
  return (
    <div className="sticky top-0">
      {ITEM.map((item, index) => {
        return <ListItem key={index} item={item} />;
      })}
    </div>
  );
}

export default CatergoryList;
