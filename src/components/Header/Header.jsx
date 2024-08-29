import React, { useState, useEffect } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Sections/Footer";
import LoadingWrapper from "../Loading/LoadingWrapper";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <LoadingWrapper>
        <header
          className={`fixed top-0 z-50 left-0 w-full transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-[#F9DABB] border-b p-6"
              : "bg-transparent border-b-transparent p-6"
          }`}
        >
          <nav className="flex justify-between lg:mx-9 md:mx-9 mx-3 items-center">
            <div className="flex lg:hidden md:hidden">
              <button onClick={toggleMenu} className="text-2xl">
                <RiMenu2Fill className="text-2xl" />
              </button>
            </div>

            <div className="lg:flex md:flex hidden w-full lg:w-auto">
              <ul className="flex flex-col lg:flex-row md:flex-row gap-9 text-lg">
                <Link to="/">
                  <li className="cursor-pointer hover:underline">Home</li>
                </Link>
                <Link to="/rooms">
                  <li className="cursor-pointer hover:underline">Rooms</li>
                </Link>
                <Link to="/about">
                  <li className="cursor-pointer hover:underline">About Us</li>
                </Link>
                <Link to="/contact">
                  <li className="cursor-pointer hover:underline">Contact Us</li>
                </Link>
              </ul>
            </div>

            <div className="flex-grow text-center">
              <h1 className="lg:text-3xl md:text-2xl">
                THE SEA BEACH <br className="hidden lg:block" /> RESORT
              </h1>
            </div>

            <div className="lg:flex items-center gap-11 md:hidden hidden">
              <h1 className="text-xl hidden lg:block md:block font-sans">
                +91 7907224281
              </h1>
              <button className="border p-3 rounded-xl text-black bg-white/50 bg-opacity-25">
                Book Your Stay
              </button>
            </div>
          </nav>

          <div
            className={`fixed inset-0 bg-[#F9DABB]/50 backdrop-blur-md transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } lg:hidden`}
          >
            <div className="flex flex-col h-full p-4">
              <button onClick={toggleMenu} className="self-end text-2xl mb-4">
                <RiCloseFill />
              </button>
              <ul className="flex flex-col gap-3 text-lg flex-grow justify-center items-center">
                <li>Home</li>
                <li>Rooms</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </header>
        <Outlet />
        <Footer />
      </LoadingWrapper>
    </>
  );
}

export default Header;
