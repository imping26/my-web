import React from "react";
import { Coffee } from "lucide-react";

const ITEM = [
  {
    title: "Digital Gadget",
    value:"",
    image: "",
  },
  {
    title: "Home Appliances",
    value:"",
    image: "",
  },
  {
    title: "Automobile",
    value:"",
    image: "",
  },
  {
    title: "Toys",
    value:"",
    image: "",
  },
  {
    title: "Beauty & Cosmetics",
    value:"",
    image: "",
  },
  {
    title: "Digital Gadget",
    value:"",
    image: "",
  },
];

const ListItem = ({ item }) => {
  const { title, image } = item;
  return (
    <div className="flex flex-col items-center py-2">
      <div className="p-2 rounded-full border border-slate-300 ">
        <Coffee size={32} className="text-green-500" />
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
