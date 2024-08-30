import React from "react";
import { MdAdsClick } from "react-icons/md";
import { motion } from "framer-motion"; // Import Framer Motion
import mobilebanner from "../../assets/Arafed Bed View Castle.jpg";
import sea from '../../assets/waves.mp4'
function Banner() {
  return (
    <div className="w-full h-auto">
      <div className="relative flex flex-col gap-16 md:gap-98 lg:gap-44 overflow-hidden items-center justify-center">
        {/* <div className="absolute bg-[#F9DABB] h-1/2 w-full top-0"></div> */}
        <div className="absolute w-full object-cover opacity-50 h-1/2 top-0">
          <video autoPlay loop muted id="video" className="h-full w-full object-cover">
            <source src={sea} />
          </video>
        </div>
        <h1 className="absolute lg:relative z-40 top-28 lg:top-48 lg:left-16 md:top-48 md:left-72 text-2xl md:text-3xl lg:text-5xl text-center px-4 lg:px-0">
          Experience Unparalleled Comfort
        </h1>

        <div className="container hidden md:block md:mt-60 lg:mt-16 lg:block mx-auto z-30">
          <img
            src="https://demoapus1.com/swissresort/wp-content/uploads/2024/01/slider21.png"
            alt="Resort Banner"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="container md:hidden lg:hidden mx-auto z-40 mt-16 p-5">
          <img
            src={mobilebanner}
            alt="Mobile Resort Banner"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <motion.div
          className="flex z-40 flex-col gap-5 md:gap-2 bg-white/50 backdrop-blur-lg absolute p-6 md:p-8 lg:p-12 top-48 md:top-44 lg:top-52 rounded-3xl left-4 md:left-16 lg:left-44 max-w-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <small className="text-sm md:text-base hidden lg:block">
            THE SEA BEACH RESORT
          </small>
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Book your room & <br /> enjoy the comfort
          </h1>

          <div className="flex gap-5 md:gap-7">
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                35
              </span>
              <h1 className="text-lg md:text-xl lg:text-2xl"> Rooms</h1>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                16
              </span>
              <h1 className="text-lg md:text-xl lg:text-2xl"> Suits</h1>
            </div>
          </div>
        </motion.div>

        <a
          href="tel:+91  7907224281"
          className="absolute  md:block lg:block z-40 bottom-20 md:bottom-24 lg:bottom-16 border bg-[#F9DABB] border-none px-4 py-2"
        >
          <h1 className="text-lg md:text-xl lg:text-xl font-semibold text-black">
            Book Now
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Banner;
