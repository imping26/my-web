import React from "react";
import WrapContent from "../../components/WrapContent";
import TopSearchNavbar from "../../components/TopSearchNavbar";
import SliderSC from "../../components/SliderSC";
import DisplaySlideItemList from "./View/DisplaySlideItemList";

const DATA = [
  { id: 1, title: "banner1", image: "/demobanner1.png" },
  { id: 2, title: "banner2", image: "/demobanner2.png" },
  { id: 3, title: "banner3", image: "/demobanner3.png" },
];

const sliderCom = ({ items }) => {
  const { title, image } = items;
  return (
    <div className="w-full">
      <img className="w-full" src={image} alt={title} />
    </div>
  );
};

function HomeSingleBanner({ Image }) {
  return (
    <div className="w-full px-3 pt-3">
      <img className="w-full rounded-lg" src={Image} alt="" />
    </div>
  );
}

const FeatureBrand = () => {
  return (
    <div className="p-3">
      <div>
        <p className="text-sm text-stone-600">Featured brands</p>
      </div>
      <div className="flex flex-wrap">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-[50%] px-3">
            <img src="/sharp.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <WrapContent>
      <TopSearchNavbar theme home />
      <SliderSC components={sliderCom} items={DATA} />
      <HomeSingleBanner Image={"/homebanner.png"} />
      <HomeSingleBanner Image={"/homebanner2.png"} />
      <HomeSingleBanner Image={"/homebanner1.png"} />
      <FeatureBrand />
      <DisplaySlideItemList />
    </WrapContent>
  );
}

export default HomePage;
