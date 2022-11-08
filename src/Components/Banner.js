import React from "react";

const Banner = ({ slide }) => {
  const { id, image, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="banner-image w-full">
        <img
          src={image}
          className="w-11/12 mx-auto h-screen rounded-lg border border-slate-800"
          alt=""
        />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 right-20 bottom-5">
        <a href={`#slide${prev}`} className="btn btn-circle mx-2">
          {" "}
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a href={`#slide${next}`} className="btn btn-circle mx-2">
          {" "}
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
      <div className=" absolute transform -translate-y-1/2 left-20 top-60">
        <h1 className="text-7xl font-extrabold text-white mb-10">
          Meet Our Heart <br /> Specialists
        </h1>
        <p className="text-white mb-10">
          Your heart is in outstanding hands with the physicians at the <br /> Heart Clinic and over
          the course of many years.
        </p>
        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
