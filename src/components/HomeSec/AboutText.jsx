import React from "react";

function AboutText() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-10 mt-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col gap-3">
        {/* <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
          THE SEA BEACH RESORT
        </span> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          THE SEA BEACH RESORT
        </h1>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">
          Established in 2024, The Sea Beach Resort in Alappuzha, Kerala, has
          been dedicated to providing a serene beachfront escape for our guests.
          With stunning sea view rooms, a romantic honeymoon cottage, and a
          relaxing mini swimming pool, we offer a perfect blend of comfort and
          natural beauty. Our commitment to exceptional service and homely
          dining ensures a memorable stay by the sea.
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-36">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">8k</h1>
          <span className="text-sm sm:text-base md:text-lg">
            Happy Customers
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">6</h1>
          <span className="text-sm sm:text-base md:text-lg">Bedrooms</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">3</h1>
          <span className="text-sm sm:text-base md:text-lg">Square Areas</span>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
