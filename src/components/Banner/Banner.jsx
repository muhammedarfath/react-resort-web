import React from "react";
import { MdAdsClick } from "react-icons/md";
import Bannerimage from "../../assets/Banner.jpg";

function Banner() {
  return (
    <div className="w-full h-screen">
      <div className="relative flex-col lg:h-full md:h-full h-full gap-16 md:gap-32 lg:gap-44 overflow-hidden bg-[#F9DABB] items-center flex justify-center">
        <h1 className="absolute lg:relative top-14  lg:top-20 md:top-28 text-4xl md:text-6xl lg:text-8xl text-center px-4">
          Experience Unparalleled Comfort
        </h1>
        <div className="container mx-auto">
          <img src={Bannerimage} alt="" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="flex flex-col gap-5 md:gap-10 bg-white/50 backdrop-blur-lg absolute p-6 md:p-10 top-32 md:top-48 lg:top-64 rounded-3xl left-4 md:left-16 lg:left-44">
          <small className="text-sm md:text-base">THE SEA BEACH RESORT</small>
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Book your room & <br /> enjoy the comfort
          </h1>
          <div className="flex gap-5 md:gap-7">
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-4xl md:text-5xl lg:text-7xl font-bold">
                35
              </span>
              <h1 className="text-xl md:text-2xl lg:text-3xl"> Rooms</h1>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-4xl md:text-5xl lg:text-7xl font-bold">
                16
              </span>
              <h1 className="text-xl md:text-2xl lg:text-3xl"> Suits</h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 md:bottom-40 lg:bottom-60 border border-black lg:border-white md:border-white bg-white bg-opacity-15 rounded-xl p-2 md:p-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
            Book Now
          </h1>
        </div>
        <div className="absolute border border-black p-2 md:p-4 lg:border-white md:border-white bottom-8 md:bottom-20 lg:bottom-36 rounded-full animate-zoom">
          <MdAdsClick className="text-xl md:text-2xl lg:text-3xl text-black lg:text-white md:text-white" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
