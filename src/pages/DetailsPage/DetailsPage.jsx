import React, { useEffect } from "react";
import WrapContent from "../../components/WrapContent";
import Navbar from "../../components/Navbar";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useItemStore } from "../../store/useItemStore";
import { Toaster } from "sonner";

const Cart = () => {
  const navigate = useNavigate();
  const goCartHandle = () => {
    navigate("/cart");
  };

  const store = useItemStore();
  const totalCartItem = store.cartList.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <div onClick={goCartHandle}>
      <div className="relative">
        <ShoppingCart color="#fff" />
        <div className="absolute top-[-5px] left-4 w-[15px] h-[15px] bg-white rounded-full text-black text-xs font-semibold flex justify-center items-center">
          {totalCartItem}
        </div>
      </div>
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
    store.addToCart(items);
  };

  return (
    <WrapContent className="">
      <Toaster richColors position="top-center" />
      <Navbar
        title="Product details"
        backTo={"/search"}
        rightComponent={Cart}
      />
      <div>
        <div className="p-3">
          <img
            className="w-full h-full object-contain"
            src={`http://localhost:3000/${result[0].image}`}
            alt=""
          />
        </div>
        <div className="p-3 flex flex-col">
          <p className="font-semibold text-lg">{result[0].title}</p>
          <p className="text-theme text-2xl font-semibold">
            RM {result[0].price.toFixed(2)}
          </p>
          <p>description</p>
        </div>
      </div>
      <div className="flex gap-3 justify-center px-2 py-3 bottom-0 fixed w-full ">
        <button
          className="border-stone-400 bg-white text-black p-3 border rounded-md flex-1"
          onClick={() => addToCartHandler(result[0])}
        >
          ADD TO CART
        </button>
        <button className="bg-theme text-white text-lg p-3 border rounded-md flex-1">
          BUY NOW
        </button>
      </div>
    </WrapContent>
  );
}

export default DetailsPage;
