import React, { useEffect } from "react";
import WrapContent from "../../components/WrapContent";
import Navbar from "../../components/Navbar";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useItemStore } from "../../store/useItemStore";

const Cart = () => {
  const navigate = useNavigate();
  const goCartHandle = () => {
    navigate("/cart");
  };

  return (
    <div onClick={goCartHandle}>
      <ShoppingCart color="#fff" />
    </div>
  );
};

function DetailsPage() {
  const { id } = useParams();
  const store = useItemStore();
  const { data, isLoading } = useQuery({
    queryKey: ["ItemDetails"],
    queryFn: () => store.fetchItemDetails({ id }),
  });

  if (isLoading) {
    return <div>isloading</div>;
  }

  const { result } = data;

  const addToCartHandler = (items) => { 
    store.addToCart(items) 
  };

  return (
    <WrapContent className="bg-stone-200">
      <Navbar
        title="Product details"
        backTo={"/search"}
        rightComponent={Cart}
      />
      <div>
        <div>
          <img src={`http://localhost:3000/${result[0].image}`} alt="" />
        </div>
        <div className="p-3 flex flex-col">
          <p className=" font-semibold text-lg">{result[0].title}</p>
          <p className="text-theme text-2xl font-semibold">
            RM {result[0].price.toFixed(2)}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            odit similique. Quia itaque molestias omnis minima dolorum iste
            cumque soluta, fugiat rerum velit veniam nesciunt tempora non
            excepturi, assumenda ducimus.
          </p>
        </div>
      </div>
      <div className="flex gap-3 justify-center px-2 py-3 bottom-0 fixed w-full ">
        <button
          className="border-stone-400 border-2 rounded-sm p-3 flex-1 bg-white"
          onClick={() => addToCartHandler(result[0])}
        >
          ADD TO CART
        </button>
        <button className="bg-theme text-white text-lg rounded-sm p-3 flex-1">
          BUY NOW
        </button>
      </div>
    </WrapContent>
  );
}

export default DetailsPage;
