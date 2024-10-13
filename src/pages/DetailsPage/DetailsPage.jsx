import React from "react";
import WrapContent from "../../components/WrapContent";
import Navbar from "../../components/Navbar";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  return (
    <div>
      <ShoppingCart color="#fff" />
    </div>
  );
};

function DetailsPage() {
  return (
    <WrapContent className="bg-stone-200">
      <Navbar
        title="Product details"
        backTo={"/search"}
        rightComponent={Cart}
      />
      <div>
        <div>
          <img src="/detaildemo.png" alt="" />
        </div>
        <div className="p-3 flex flex-col">
          <span className=" font-semibold text-lg">
            HONOR 200 / HONOR 200 Pro 5G (12GB+512GB) Smartphone
          </span>
          <span className="text-theme text-2xl font-semibold">RM 2,699</span>
        </div>

      </div>
      <div className="flex gap-3 justify-center px-2 py-3 bottom-0 fixed w-full bg-stone-300">
        <button className="border-stone-400 border-2 rounded-sm p-3 flex-1">
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
