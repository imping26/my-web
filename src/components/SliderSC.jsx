import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderSC({
  items = [],
  components: Components,
}) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: (dots) => {
      return (
        <div>
          <ul style={{ margin: "0px",display:"flex",justifyContent:"center",gap:"4px" }}> {dots} </ul>
        </div>
      );
    },
    customPaging: (i) => { 
     return <div
        style={{
          width: "30px",
          height: "4px", 
          color: "#e4121b",
          background:"",
          border: "1px #e4121b solid",
        }}
      > 
      </div>;
    },
  };

  return (
    <div className="slider-container pb-2">
      <Slider {...settings}>
        {items.map((items, index) => {
          return <Components key={items.id + index} items={items} />;
        })}
      </Slider>
    </div>
  );
}

export default SliderSC;
