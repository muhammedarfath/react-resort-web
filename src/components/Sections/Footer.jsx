import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-[#122223] mt-36">
        <div className="mx-auto p-6 md:p-14 w-full max-w-screen-xl">
          <div className="flex flex-col md:flex-row justify-between gap-8 px-4 py-6">
            <div className="text-white flex flex-col gap-6 md:gap-11">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Contact
                </h2>
                <p>
                  The Sea Beach Resort North Of Vijaya Childrens Park, <br />{" "}
                  Near United Club,
                  <br /> Beach Road Alleppey
                </p>
              </div>

              <div>
                <p>theseaalleppey@gmail.com</p>
                <p>+919447400150</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/rooms" className="hover:underline">
                    Rooms
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stay Updated with Our Beach Resort Offers.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-8 text-gray-300">
                Subscribe to receive the latest news, exclusive offers, and
                updates about our beach resort. Be the first to know about
                special promotions and upcoming events.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row max-w-md gap-y-4 gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-[#122223] px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-[#F9DBBB] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#F9DBBB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between border-t border-gray-700 py-6 px-4 md:px-14">
          <div className="mb-4 md:mb-0">
            <span className="text-white">
              © 2024 BeachResort.com. All rights reserved.
            </span>
          </div>
          <div className="mb-4 md:mb-0 flex items-center">
            <h1 className="text-white">THE SEA BEACH RESORT</h1>
          </div>
          <div className="flex items-center gap-4 mr-11">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
