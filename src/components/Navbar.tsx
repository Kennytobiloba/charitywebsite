"use client";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-black text-white font-Titillium w-full z-50">
      <nav className="bg-black border-gray-200 py-2.5 dark:bg-gray-900 h-20">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto h-full">
          {/* Logo Section */}
          <a href="#" className="flex items-center">
         
            <span className="text-xl font-semibold whitespace-nowrap text-white">
              Welfare
            </span>
          </a>

          {/* Mobile Toggle and Button */}
          <div className="flex items-center space-x-4 lg:order-2">
            {/* Custom Button */}
            <div className="hidden lg:block">
              <Button />
            </div>
            {/* Hamburger Menu Button */}
            <button
              type="button"
              className="inline-flex items-center bg-white p-2 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute bg-black z-50 top-20 inset-x-0 w-full lg:flex lg:w-auto lg:static lg:order-1 ${
              menuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul
              className="flex flex-col items-center space-y-4 lg:space-y-0 justify-center text-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
              onClick={closeMenu}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 text-white lg:bg-transparent lg:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white lg:bg-transparent lg:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white lg:bg-transparent lg:p-0"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white lg:bg-transparent lg:p-0"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white lg:bg-transparent lg:p-0"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white lg:bg-transparent lg:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
