import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function OfficialStore({ data }) {
  // Ensure data and data.result exist before trying to map
  const results = data?.data?.result || [];

  const navigate = useNavigate();

  const toSearchPage = () => {
    navigate("/search");
  };

  return (
    <div>
      {results.map((item, index) => {
        let RecommendList = item?.children || [];
        return (
          <div key={item.id + index}>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <div className="h-4 w-1 bg-theme mr-1"></div>
                <span className="font-semibold">{item.name}</span>
              </div>
              {item.hasChildren && (
                <button onClick={toSearchPage}>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-12 gap-2 pb-2">
              {RecommendList.map((item) => (
                <div
                  key={item.id}
                  className="col-span-4 flex flex-col items-center "
                >
                  {item.image && (
                    <div className="relative overflow-hidden flex items-center justify-center">
                      <img src={item.image} className=" object-center" alt="" />
                    </div>
                  )}
                  <div className="w-[70px] text-center text-sm text-ellipsis overflow-hidden leading-[15px] pt-1">
                    <span className="text-xs ">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OfficialStore;
