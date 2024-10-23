import React from "react";
import { useNavigate } from "react-router-dom";
import { useItemStore } from "../../../store/useItemStore";
import { useQuery } from "@tanstack/react-query"; 
import { useProductFilters } from "@hooks/useProductFilter";

const ProductCard = ({ item, isGrid, onClick }) => {
  const { id, image, title, price, currentPrice, inStock } = item;

  return (
    <div
      onClick={!inStock ? null : () => onClick(id)}
      className={`relative border border-slate-400 rounded-lg ${
        isGrid ? "flex items-center" : "col-span-6"
      } `}
    >
      <div className="relative overflow-hidden flex items-center justify-center">
        <img
          src={`http://localhost:3000/${image}`}
          className={`object-contain ${
            isGrid ? "h-[120px] w-[100px]" : "h-[120px] object-center"
          }`}
          alt={title}
        />
      </div>
      {!isGrid && <div className="border-b mx-2"></div>}
      <div
        className={`flex flex-col font-semibold p-2 ${
          isGrid ? "h-[100px] justify-between w-[300px]" : ""
        }`}
      >
        <div className="text-sm text-ellipsis overflow-hidden line-clamp-2 py-1">
          <span>{title}</span>
        </div>
        <div className="text-xs flex flex-col">
          <span className="text-red-500">RM {currentPrice.toFixed(2)}</span>
          <span>
            <s>RM {price.toFixed(2)}</s>
          </span>
        </div>
      </div>
      {!inStock ? (
        <div className="absolute top-0 left-0 h-full bg-stone-100/50 w-full flex justify-center items-center">
          <p className="font-bold text-theme">OUT OF STOCK</p>
        </div>
      ) : null}
    </div>
  );
};

const ListContent = ({ isGrid }) => {
  const navigate = useNavigate();

  const goDetailsPages = (id) => {
    navigate(`/details/${id}`);
  };

  const { filterData } = useProductFilters();
  const store = useItemStore();
  useProductFilters
  const { data: searchPageList, isLoading, error } = useQuery({
    queryKey: ["itemList", filterData],
    queryFn: () => store.fetchItemList({ data: filterData }),
    enabled: !!filterData,
  });

  let { result, message } = store.searchPageList;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (message) {
    return (
      <div className="w-full h-[150px] flex justify-center items-center">
        {message}
      </div>
    );
  }

  return (
    <div
      className={
        isGrid
          ? "flex flex-col gap-2 px-3 pt-3"
          : "grid grid-cols-12 gap-2 px-3 pt-3"
      }
    >
      {result && result.length > 0
        ? result.map((item, index) => (
            <ProductCard
              key={item.id}
              item={item}
              isGrid={isGrid}
              onClick={goDetailsPages}
            />
          ))
        : null}
    </div>
  );
};

export default ListContent;
