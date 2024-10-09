import React, { useState, useEffect } from "react";
import {
  RiMenu2Fill,
  RiCloseFill,
  RiHome2Fill,
  RiHotelFill,
  RiGalleryFill,
  RiContactsFill,
  RiInformationFill,
  RiBookFill,
} from "react-icons/ri";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Sections/Footer";
import LoadingWrapper from "../Loading/LoadingWrapper";
import logo from "../../assets/Blue Island Beach Resort Logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          className={`fixed top-0 z-50 font-sans left-0 w-full transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-[#F9DABB] border-b"
              : "bg-transparent border-b-transparent"
          }`}
        >
          <nav className="flex justify-between items-center lg:mx-9 md:mx-9 mx-3">
            <div className="flex items-center lg:hidden md:hidden">
              <button onClick={toggleMenu} className="text-2xl">
                <RiMenu2Fill className="text-2xl" />
              </button>
            </div>

            <div className="lg:flex md:flex hidden items-center">
              <ul className="flex flex-col lg:flex-row md:flex-row gap-9 text-md">
                <Link to="/">
                  <li className="cursor-pointer hover:underline">Home</li>
                </Link>
                <Link to="/rooms">
                  <li className="cursor-pointer hover:underline">Rooms</li>
                </Link>
                <Link to="/gallery">
                  <li className="cursor-pointer hover:underline">Gallery</li>
                </Link>
                <Link to="/about">
                  <li className="cursor-pointer hover:underline">About Us</li>
                </Link>
                <Link to="/contact">
                  <li className="cursor-pointer hover:underline">Contact Us</li>
                </Link>
              </ul>
            </div>

            <div className="mx-auto flex flex-col items-center justify-center">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-20 h-20 object-contain"
                />
              </Link>
            </div>

            <div className="lg:flex items-center gap-11 md:hidden hidden">
              <div>
                <h1 className="text-md font-semibold hidden lg:block md:block font-sans">
                  +91 9447400150
                </h1>
                <small>
                  The Sea Beach Resort, <br /> Beach Road Alleppey
                </small>
              </div>
              <Link to="/rooms">
                <button className="p-3 text-md text-black">
                  Book Your Stay
                </button>
              </Link>
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
              <h2 className="text-2xl font-bold text-center text-[#333] mb-6">
                The Sea Beach Resort
              </h2>
              <p className="text-center text-lg text-[#333] mb-4">
                Experience tranquility and luxury by the sea. Explore our rooms,
                gallery, and more.
              </p>
              <ul className="flex flex-col gap-3 text-lg flex-grow justify-center">
                <Link to="/" onClick={closeMenu} className="w-full">
                  <li className="flex items-center justify-start w-full p-4 bg-white rounded-lg shadow-md hover:bg-[#F9DABB] transition">
                    <RiHome2Fill className="mr-3 text-xl" /> Home
                  </li>
                </Link>
                <Link to="/rooms" onClick={closeMenu} className="w-full">
                  <li className="flex items-center justify-start w-full p-4 bg-white rounded-lg shadow-md hover:bg-[#F9DABB] transition">
                    <RiHotelFill className="mr-3 text-xl" /> Rooms
                  </li>
                </Link>
                <Link to="/gallery" onClick={closeMenu} className="w-full">
                  <li className="flex items-center justify-start w-full p-4 bg-white rounded-lg shadow-md hover:bg-[#F9DABB] transition">
                    <RiGalleryFill className="mr-3 text-xl" /> Gallery
                  </li>
                </Link>
                <Link to="/about" onClick={closeMenu} className="w-full">
                  <li className="flex items-center justify-start w-full p-4 bg-white rounded-lg shadow-md hover:bg-[#F9DABB] transition">
                    <RiInformationFill className="mr-3 text-xl" /> About Us
                  </li>
                </Link>
                <Link to="/contact" onClick={closeMenu} className="w-full">
                  <li className="flex items-center justify-start w-full p-4 bg-white rounded-lg shadow-md hover:bg-[#F9DABB] transition">
                    <RiContactsFill className="mr-3 text-xl" /> Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </header>

        <Outlet />
        <Footer />

        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
          <a
            href="tel:+91 9447400150"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg icon-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone className="text-3xl" />
          </a>
          <a
            href="https://wa.me/+919447400150"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg icon-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>
      </LoadingWrapper>
    </>
  );
}

export default Header;
