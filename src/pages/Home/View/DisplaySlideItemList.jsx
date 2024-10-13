import React from "react";

function DisplaySlideItemList() {
  return (
    <div className=" ">
      <h2 className="w-[95%] float-end font-semibold bg-stone-300 rounded-tl-md rounded-bl-md px-3 py-1">
        Digital Gadgets
      </h2>
      <div className="w-full flex overflow-x-auto space-x-4 px-4">
        {[...Array(6)].map((_, index) => (
          <div
            className="flex-shrink-0 w-[42%] bg-white p-4 shadow rounded flex flex-col"
            key={index}
          >
            <div className="flex items-center justify-center h-40 overflow-hidden">
              <img
                src="/washer.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-grow flex flex-col justify-between mt-2">
              <h3 className="text-sm">
                Apple Watch Series 10 GPS and Cellular Sport
              </h3>
              <div>
                <p className="text-theme text-sm">RM 1,798.00</p>
                <p className="line-through text-gray-500 text-sm">
                  RM 2,449.00
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplaySlideItemList;
