import React, { useState } from "react";
import uniqone from "../../assets/uniqone.jpg";
import uniqtwo from "../../assets/uniq2.webp";
import uniqthree from "../../assets/uniq3.jpg";
import { Skeleton } from "@nextui-org/react";

function SectionThree() {

  return (
    <>
      <div className="w-full flex justify-end mt-16">
        <div className="w-5/6 bg-[#122223] text-white py-24 px-4 rounded-l-2xl">
          <div className="flex lg:flex-row flex-col lg:gap-36 gap-6 mx-auto text-center p-9">
            <div className="flex flex-col gap-5 items-start">
              <small className="text-gray-400 mb-2 text-xl">
                There's So Much to Discover
              </small>
              <h1 className="lg:text-5xl md:text-5xl text-3xl  text-start font-bold mb-4">
                Unique <br /> Experiences
              </h1>
              <p className="text-lg text-start  mb-6">
                Welcome to the best deluxe resort <br /> in Kerala.
              </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-center gap-4">
              <img
                src={uniqone}
                alt="Experience 1"
                className=" object-cover rounded-lg shadow-lg w-80 h-80"
              />

              <img
                src={uniqtwo}
                alt="Experience 2"
                className=" object-cover rounded-lg shadow-lg w-80 h-80"
              />
              <img
                src={uniqthree}
                alt="Experience 3"
                className=" object-cover rounded-lg shadow-lg w-80 h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
