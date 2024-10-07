import React from "react";

const DATA = [
  {
    image: "/apple.png",
    title: "Apple Brand Store",
    value: "",
  },
  {
    image: "/samsung.png",
    title: "Samsung Brand Store",
    value: "",
  },
  {
    image: "/sharp.png",
    title: "Sharp Brand Store",
    value: "",
  },
];

function OfficialStore() {
  return (
    <div>
      <div className="flex items-center">
        <div className="h-4 w-1 bg-theme mr-1"></div>
        <span className="font-semibold">Official Store</span>
      </div>
      {/*-----------*/}
      <div className="grid grid-cols-12 gap-2 pb-2">
        {DATA.map((items) => {
          const { image, title } = items;
          return (
            <div className="col-span-4 w-16 p-2 flex flex-col items-center justify-between">
              <img src={image} className="h-[60px] object-contain" alt="" />
              <div className="w-[70px] text-center leading-[15px] pt-1">
                <span className="text-xs ">{title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OfficialStore;
