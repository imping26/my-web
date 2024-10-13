import React from "react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/washer.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/washer.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
  {
    image: "/apple-charger.png",
    title: "Apple 35W Charger",
    price: 1689,
    pricebefore: 2099,
  },
];

function ListContent() {
  const navigate = useNavigate();
  const goDetailsPages = () => {
    navigate("/details");
  };
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 px-3 pt-3">
        {DATA.map((items, index) => {
          const { image, title, price, pricebefore } = items;
          return (
            <div
              onClick={goDetailsPages}
              key={index}
              className="col-span-6 border border-slate-400 rounded-lg"
            >
              <div className="relative  overflow-hidden flex items-center justify-center">
                <img src={image} className="h-[120px] object-center" alt="" />
              </div>
              <div className="border-b mx-2"></div>
              <div className="flex flex-col font-semibold pt-0 p-2">
                <div className="text-sm text-ellipsis overflow-hidden line-clamp-2 py-1">
                  <span>{title}</span>
                </div>
                <div className="text-xs flex flex-col">
                  <span className="text-red-500">RM {price.toFixed(2)}</span>
                  <span>
                    <s>RM {pricebefore.toFixed(2)}</s>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListContent;
