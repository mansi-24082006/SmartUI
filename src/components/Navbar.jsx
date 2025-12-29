import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav flex items-center justify-between px-8 md:px-16 h-20 bg-transparent w-full max-w-[1400px] mx-auto">
      {/* Logo */}
      <div className="logo">
        <h3 className="text-bubble-hover font-extrabold text-3xl md:text-4xl">
          WebArchitect
        </h3>
      </div>

      {/* Icons */}
      <div className="icons flex items-center gap-8 md:gap-12 relative">
        {/* Home Icon */}
        <Link
          to="/"
          className="group flex flex-col items-center relative"
        >
          <i className="icon text-2xl md:text-[24px] text-white cursor-pointer hover:text-yellow-400 transition-all duration-300">
            <FaHome />
          </i>
          <span className="text-xs md:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-300 absolute -bottom-6">
            Home
          </span>
        </Link>

        {/* About Icon */}
        <Link
          to="/about"
          className="group flex flex-col items-center relative"
        >
          <i className="icon text-2xl md:text-[24px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300">
            <FaInfoCircle />
          </i>
          <span className="text-xs md:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-300 absolute -bottom-6">
            About
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
