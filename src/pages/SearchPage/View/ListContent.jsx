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

const ProductCard = ({ item, isGrid, onClick }) => {
  const { image, title, price, pricebefore } = item;

  return (
    <div
      onClick={onClick}
      className={`border border-slate-400 rounded-lg ${
        isGrid ? "flex items-center" : "col-span-6"
      }`}
    >
      <div className="relative overflow-hidden flex items-center justify-center">
        <img
          src={image}
          className={`object-contain ${
            isGrid ? "h-[120px] w-[120px]" : "h-[120px] object-center"
          }`}
          alt={title}
        />
      </div>
      {!isGrid && <div className="border-b mx-2"></div>}
      <div
        className={`flex flex-col font-semibold p-2 ${
          isGrid ? "h-[100px] justify-between" : ""
        }`}
      >
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
};

const ListContent = ({ isGrid }) => {
  const navigate = useNavigate();

  const goDetailsPages = () => {
    navigate("/details");
  };

  return (
    <div
      className={
        isGrid
          ? "flex flex-col gap-2 px-3 pt-3"
          : "grid grid-cols-12 gap-2 px-3 pt-3"
      }
    >
      {DATA.map((item, index) => (
        <ProductCard
          key={index}
          item={item}
          isGrid={isGrid}
          onClick={goDetailsPages}
        />
      ))}
    </div>
  );
};

export default ListContent;
