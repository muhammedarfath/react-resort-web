import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import imageone from "../../assets/room1.jpg";
import imagetwo from "../../assets/room2.jpg";
import imagethree from "../../assets/room3.jpg";
import imagefour from "../../assets/room4.jpg";
import imagefive from "../../assets/room5.jpg";
import imagesix from "../../assets/room6.jpg";
import { motion } from "framer-motion";

const slides = [imageone, imagetwo, imagethree, imagefour, imagefive, imagesix];

function SectionTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const maxIndex =
      window.innerWidth >= 1024 ? slides.length - 3 : slides.length - 1;
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full flex flex-col items-center mt-40 px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="flex justify-between lg:flex-row flex-col w-full container">
        <div className="text-start mb-8">
          <small className="text-gray-600 block mb-1">EXPLORE</small>
          <h1 className="text-3xl font-bold">Rooms & Suite</h1>
        </div>
        <div className="flex gap-3 items-center">
          <h1>VIEW MORE</h1>
          <button
            className="bg-[#F5C18A] text-white p-2 rounded-full flex items-center justify-center"
            onClick={() => navigate("/rooms")}
          >
            <FaEye />
          </button>
        </div>
      </div>

      <div className="relative container mx-auto w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (window.innerWidth >= 1024 ? 33.33 : 100)
            }%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 p-2 flex-shrink-0"
              key={index}
            >
              <div className="bg-indigo-50 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F5C18A] text-white p-2 rounded-full"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F5C18A] text-white p-2 rounded-full"
          onClick={nextSlide}
          disabled={
            currentIndex >=
            (window.innerWidth >= 1024 ? slides.length - 3 : slides.length - 1)
          }
        >
          <FaChevronRight />
        </button>
      </div>
    </motion.div>
  );
}

export default SectionTwo;
