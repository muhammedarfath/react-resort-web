import React from "react";

function Profile() {
  return (
    <div className="mt-40 w-full mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="https://demoapus1.com/swissresort/wp-content/uploads/2024/01/about2.jpg"
          alt=""
          className="w-full h-auto md:w-4/5 lg:w-3/4"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-start gap-5 justify-start flex-col p-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-start">Muhammed Arfath</h1>
        <span className="text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetuer <br />
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum{" "}
          <br />
          sociis natoque penatibus et magnis dis parturient montes, nascetur{" "}
          <br />
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium <br />
          quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla <br />
          vel, aliquet nec, vulputate eget, arcu.
        </span>
      </div>
    </div>
  );
}

export default Profile;
