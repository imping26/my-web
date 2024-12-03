import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useItemStore } from "../store/useItemStore";

export function useProductFilters() {
  const [filterData, setFilterData] = useState({
    priceRangeMin: "",
    priceRangeMax: "",
    inStock: false,
    categories: [],
    rating: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const store = useItemStore();

  useEffect(() => {
    setFilterData((prevData) => ({
      ...prevData,
      categories: searchParams.get("category")
        ? searchParams.get("category").split(",")
        : prevData.categories,
      inStock: searchParams.get("inStock")
        ? searchParams.get("inStock") === "true"
        : prevData.inStock,
      priceRangeMin: searchParams.get("priceRangeMin")
        ? parseInt(searchParams.get("priceRangeMin"))
        : prevData.priceRangeMin,
      priceRangeMax: searchParams.get("priceRangeMax")
        ? parseInt(searchParams.get("priceRangeMax"))
        : prevData.priceRangeMax,
      rating: searchParams.get("rate")
        ? parseInt(searchParams.get("rate"))
        : prevData.rating,
    }));
    
  }, []);

  const setFilters = useCallback(() => {
    setSearchParams((params) => {
      if (filterData.categories.length > 0) {
        params.set("category", filterData.categories.join(","));
      } else {
        params.delete("category");
      }

      if (filterData.inStock) {
        if (filterData.inStock !== null && filterData.inStock !== undefined && filterData.inStock !== "") {
            params.set("inStock", filterData.inStock.toString());
        } 
      } else {
        params.delete("inStock");
      }

      if (filterData.priceRangeMin) {
        params.set("priceRangeMin", filterData.priceRangeMin.toString());
      } else {
        params.delete("priceRangeMin");
      }

      if (filterData.priceRangeMax) {
        params.set("priceRangeMax", filterData.priceRangeMax.toString());
      } else {
        params.delete("priceRangeMax");
      }

      if (filterData.rating) {
        params.set("rate", filterData.rating.toString());
      } else {
        params.delete("rate");
      }

      return params;
    });
    store.fetchItemList({ data: filterData });
  }, [filterData, setSearchParams]);

  return {
    filterData,
    setFilterData,
    setFilters,
  };
}
