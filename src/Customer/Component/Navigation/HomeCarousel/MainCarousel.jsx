// src/Customer/Component/Navigation/HomeCarousel/MainCarousel.jsx
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const handleDragStart = (e) => e.preventDefault();

const MainCarousel = () => {
  const items = MainCarouselData.map((item, i) => (
    <img
      key={i}
      className="cursor-pointer w-full h-[400px] object-cover"
      src={item.image}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
    />
  ));

  return (
    <div className="w-full max-w-5xl mx-auto mt-4">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
       
      />
    </div>
  );
};

export default MainCarousel;
