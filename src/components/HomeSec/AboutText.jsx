import React from "react";

function AboutText() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-10 mt-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col gap-3">
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl">THE SEA BEACH RESORT</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Book your room & enjoy the comfort</h1>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">
          Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam <br /> justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Hotel ut nisl quam nestibulum. In enim <br />
          justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer <br /> tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-36">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">12m+</h1>
          <span className="text-sm sm:text-base md:text-lg">Happy Customers</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">28</h1>
          <span className="text-sm sm:text-base md:text-lg">Luxe Apartments</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">22</h1>
          <span className="text-sm sm:text-base md:text-lg">Bedrooms</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">18</h1>
          <span className="text-sm sm:text-base md:text-lg">Square Areas</span>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
