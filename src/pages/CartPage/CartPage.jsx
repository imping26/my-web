import React from "react";
import { useItemStore } from "../../store/useItemStore";
import WrapContent from "../../components/WrapContent";
import Navbar from "../../components/Navbar";

const CartItem = ({ item, handlerAddItem, handlerDecreasetem }) => {
  return (
    <div className="relative border border-slate-400 rounded-lg flex items-center mb-3">
      <div className="relative overflow-hidden flex items-center justify-center">
        <img
          className="object-contain h-[120px] w-[100px]"
          src={`http://localhost:3000/${item.image}`}
          alt=""
        />
      </div>
      <div className="flex flex-col font-semibold p-2 h-[100px] justify-between w-[300px]">
        <div className="text-sm text-ellipsis overflow-hidden line-clamp-2 py-1">
          <p>{item.title}</p>
        </div>
        <div className="text-2xl">
          <button
            className="border-2 px-3"
            onClick={() => handlerDecreasetem(item)}
          >
            -
          </button>{" "}
          <span>{item.quantity}</span>{" "}
          <button
            onClick={() => handlerAddItem(item)}
            className="border-2 px-3"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

function CartPage() {
  const store = useItemStore();
  let totalPrice;
  const handlerAddItem = (item) => {
    store.addItem(item);
  };

  const handlerDecreasetem = (item) => {
    store.removeItem(item);
  };

  const handleCheckout = () => {
    store.checkout();
  };

  if (store.cartList) {
    totalPrice = store.cartList.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }

  return (
    <WrapContent>
      <Navbar title="Cart" />
      <div className="p-3">
        {store.cartList.length === 0 ? (
          <div className="text-center">Empty cart!</div>
        ) : null}
        {store.cartList.map((i) => {
          return (
            <CartItem
              item={i}
              key={i.id}
              handlerAddItem={handlerAddItem}
              handlerDecreasetem={handlerDecreasetem}
            />
          );
        })}
      </div>
      <div className="fixed bottom-0 flex items-center w-full p-3">
        <div className="flex-1 font-semibold text-sm">
          Total price: RM {totalPrice.toFixed(2)}
        </div>
        <div className="flex-1 flex justify-center">
          <button
            className="bg-theme text-white text-lg p-3 border rounded-md flex-1"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </WrapContent>
  );
}

export default CartPage;
