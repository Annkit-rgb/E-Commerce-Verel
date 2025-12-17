// BasicCarousel.jsx
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/images/1.jpg" onDragStart={handleDragStart} role="presentation" alt="" />,
  <img src="/images/2.jpg" onDragStart={handleDragStart} role="presentation" alt="" />,
  <img src="/images/3.jpg" onDragStart={handleDragStart} role="presentation" alt="" />,
];

const MainCarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
  />
);

export default MainCarousel;
