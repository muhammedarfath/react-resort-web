import React from "react";
import uniqone from "../../assets/uniqone.jpg";
import uniqtwo from "../../assets/uniq2.webp";
import uniqthree from "../../assets/uniq3.jpg";

function SectionThree() {
  const experiences = [
    {
      image: uniqone,
      description: "Relax in our spacious rooms, complete with stunning sea views and modern amenities designed for your perfect escape."
    },
    {
      image: uniqtwo,
      description: "Savor breathtaking sunsets right on the beach, where every moment promises serenity and rejuvenation."
    },
    {
      image: uniqthree,
      description: "Experience luxury at its finest with our top-notch facilities and personalized services tailored to your needs."
    }
  ];

  return (
    <>
      <div className="w-full flex justify-end mt-16">
        <div className="w-5/6 bg-[#122223] text-white py-24 px-4 rounded-l-2xl">
          <div className="flex lg:flex-row flex-col lg:gap-36 gap-6 mx-auto text-center p-9">
            <div className="flex flex-col gap-5 items-start">
              <small className="text-gray-400 mb-2 text-xl">
                There's So Much to Discover
              </small>
              <h1 className="lg:text-5xl md:text-5xl text-3xl text-start font-bold mb-4">
                Unique <br /> Experiences
              </h1>
              <p className="text-lg text-start mb-6">
                Welcome to the best deluxe resort <br /> in Kerala.
              </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-center gap-4">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  <img
                    src={exp.image}
                    alt={`Experience ${index + 1}`}
                    className="object-cover rounded-lg shadow-lg w-80 h-80 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-70 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
