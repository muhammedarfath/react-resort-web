import { useEffect, useState } from "react";
import banner2 from "../../assets/photo1.jpg";
import banner3 from "../../assets/Banner.jpg";
import mobilebanner from "../../assets/photo_2024-09-04_19-22-0.jpg";
import mobilebanner2 from "../../assets/mobilebanner2.png";
import mobilebanner3 from "../../assets/mobilbanner3.jpg";

export function MobileCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const banners = [mobilebanner,mobilebanner2, mobilebanner3]; 
    const length = banners.length; 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % length);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, [length]);
  
    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % length);
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };
  
    return (
      <div className="relative rounded-xl overflow-hidden">
        <div className="h-full w-full transition-opacity duration-500">
          <img
            src={banners[activeIndex]}
            alt={`image ${activeIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
  
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={prevSlide}
        >
          &#10094; 
        </button>
  
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={nextSlide}
        >
          &#10095;
        </button>
  
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)} 
            />
          ))}
        </div>
      </div>
    );
  }
  