import React from "react";
import banner1 from "../Assets/Banner/banner1.jpg";
import banner2 from "../Assets/Banner/banner2.jpg";
import banner3 from "../Assets/Banner/banner3.jpg";
import banner4 from "../Assets/Banner/banner4.jpg";
import "../Assets/Styles/style.css";
import Banner from "./Banner";

const bannerData = [
  {
    image: banner1,
    prev: 4,
    id: 1,
    next: 2,
  },
  {
    image: banner2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: banner3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: banner4,
    prev: 3,
    id: 4,
    next: 1,
  },
];
const Carousel = () => {
  return (
    <div className="carousel w-full mt-16 mb-16">
      {bannerData.map((slide) => (
        <Banner key={slide.id} slide={slide}></Banner>
      ))}
    </div>
  );
};

export default Carousel;
