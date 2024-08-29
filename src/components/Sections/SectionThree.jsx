import React from "react";
import uniqone from "../../assets/P1022053.jpg";

function SectionThree() {
  return (
    <>
      <div className="w-full flex justify-end mt-16">
        <div className="w-5/6 bg-[#122223] text-white py-24 px-4 rounded-l-2xl">
          <div className="flex lg:flex-row flex-col lg:gap-60 gap-6 mx-auto text-center p-9">
            <div className="flex flex-col gap-5 items-start">
              <small className="text-gray-400 mb-2 text-xl">
                There's So Much to Discover
              </small>
              <h1 className="text-5xl text-start font-bold mb-4">Unique <br /> Experiences</h1>
              <p className="text-lg text-start  mb-6">
                Welcome to the best five-star deluxe hotel <br /> in New York.
              </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-center gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Experience 1"
                className=" object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Experience 2"
                className=" object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Experience 3"
                className=" object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
