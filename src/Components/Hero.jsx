import React from "react";
import Img10 from "../Img/car10.png";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero-tittle 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Easy Booking Process-Affordable Rental Rates
        </h1>
        <p className="hero-subtitle text-[27px] text-black-100 font-light mt-5">
          Streamline Your car rental experience with our effortless booking
          process.
        </p>
        <button className="bg-blueColor w-[150px] h-[50px] text-white mt-5 rounded-lg cursor-pointer">
          Explore Vehicle
        </button>
      </div>
      <div className="hero_image-container">
        <div className="hero_image mt-[180px]">
          <img
            className="w-[720px] h-[450px] object-contain"
            src={Img10}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
