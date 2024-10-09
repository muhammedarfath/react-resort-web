import React, { useState, useEffect } from "react";
import { MdAdsClick } from "react-icons/md";
import { motion } from "framer-motion";
import mobilebanner from "../../assets/photo_2024-09-04_19-22-0.jpg";
import sea from "../../assets/waves.mp4";
import { Link } from "react-router-dom";
import { CarouselCustomNavigation } from "./CarouselCustomNavigation";
import { MobileCarousel } from "./MobileCarousel";

function Banner() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-auto">
      <div className="relative flex flex-col gap-16 md:gap-98 lg:gap-44 overflow-hidden items-center justify-center">
        <div className="absolute w-full object-cover opacity-50 h-1/2 top-0">
          <video
            autoPlay
            loop
            muted
            id="video"
            className="h-full w-full object-cover"
          >
            <source src={sea} />
          </video>
        </div>
        <h1 className="absolute lg:relative z-40 top-28 lg:top-48 lg:left-16 md:top-48 md:left-72 text-2xl md:text-3xl lg:text-5xl text-center px-4 lg:px-0">
          Experience Unparalleled Comfort
        </h1>

        <div className="container hidden md:block md:mt-60 lg:mt-16 lg:block mx-auto z-30">
          <CarouselCustomNavigation />
        </div>

        <div className="container md:hidden lg:hidden mx-auto z-40 mt-16 p-5">
          <MobileCarousel />
        </div>

        <motion.div
          className={`fixed transition-transform duration-300 ease-in-out ${
            isScrolled
              ? "bottom-40 right-4 rounded-full icon-bounce"
              : "lg:bottom-36 lg:top-auto lg:left-1/2 bottom-80 left-1/2 md:bottom-80 md:top-96 md:left-1/2 transform -translate-x-1/2 rounded-lg"
          } z-40 flex flex-col gap-5 md:gap-2 p-3`}
        >
          <Link
            to="/rooms"
            className={`w-full flex justify-center items-center gap-2 bg-[#F9DABB] text-center ${isScrolled ? "rounded-full p-4" : "rounded-md p-3 "}  transition-all duration-300`}
          >
            <MdAdsClick className="text-2xl" />
            {!isScrolled && <span>Book Your Stay</span>}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
