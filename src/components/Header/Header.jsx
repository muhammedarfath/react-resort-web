import React, { useState, useEffect } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Sections/Footer";
import LoadingWrapper from "../Loading/LoadingWrapper";
import logo from "../../assets/BlueLogo.png";

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
          className={`fixed top-0 z-50 left-0 w-full transition-all duration-300 ease-in-out ${
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
              <ul className="flex flex-col lg:flex-row md:flex-row gap-9 text-lg">
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
              <img
                src={logo}
                alt="Logo"
                className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-14 h-14 object-contain"
              />
            </div>

            <div className="lg:flex items-center gap-11 md:hidden hidden">
              <h1 className="text-xl hidden lg:block md:block font-sans">
                +91 9447400150
              </h1>
              <button className="p-3 text-xl text-black">Book Your Stay</button>
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
                <Link to="/" onClick={closeMenu}>
                  <li>Home</li>
                </Link>
                <Link to="/rooms" onClick={closeMenu}>
                  <li>Rooms</li>
                </Link>
                <Link to="/gallery" onClick={closeMenu}>
                  <li>Gallery</li>
                </Link>
                <Link to="/about" onClick={closeMenu}>
                  <li>About Us</li>
                </Link>
                <Link to="/contact" onClick={closeMenu}>
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </header>

        <Outlet />
        <Footer />

        <a
          href="https://wa.me/+919447400150"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </LoadingWrapper>
    </>
  );
}

export default Header;
