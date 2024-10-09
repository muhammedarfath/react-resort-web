import React from "react";
import { GrWifi } from "react-icons/gr";
import { FaTv } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { CgCoffee } from "react-icons/cg";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { motion } from "framer-motion"; 


function Sectionone() {
  return (
    <motion.div
      className="w-full flex flex-col items-center p-10 sm:p-16 lg:p-36 rounded-xl container mt-11 mx-auto bg-[#F7F5EF]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-7 items-center text-center mb-10">
        <small className="text-xl">OUR SERVICES</small>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">Resort Facilities</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-14">
        <div className="flex flex-col gap-2 items-center">
          <GrWifi className="text-3xl sm:text-4xl" />
          <h1 className="text-center text-lg sm:text-xl">Wifi</h1>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <FaTv className="text-3xl sm:text-4xl" />
          <h1 className="text-center text-lg sm:text-xl">Smart TV</h1>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <MdOutlineFoodBank className="text-3xl sm:text-4xl" />
          <h1 className="text-center text-lg sm:text-xl">Kitchen Facility</h1>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <CgCoffee className="text-3xl sm:text-4xl" />
          <h1 className="text-center text-lg sm:text-xl">Coffee Maker</h1>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <MdOutlineLocalLaundryService className="text-3xl sm:text-4xl" />
          <h1 className="text-center text-lg sm:text-xl">Laundry Services</h1>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <FaUmbrellaBeach className="text-3xl sm:text-4xl" />
          <h1 className="text-center text-lg sm:text-xl">Sea View Rooms</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default Sectionone;
