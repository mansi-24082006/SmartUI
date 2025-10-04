import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav flex items-center justify-between px-[70px] h-[80px] bg-transparent">
      <div className="logo">
        <h3 className="text-bubble-hover font-bold text-3xl">WebArchitect</h3>
      </div>

      <div className="icons flex items-center gap-[30px] relative">
        {/* Home Icon */}
        <Link to="/" className="group flex flex-col items-center">
          <i className="icon text-[22px] text-white cursor-pointer hover:text-yellow-400 transition-all duration-300">
            <FaHome />
          </i>
          <span className="text-sm mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-300">
            Home
          </span>
        </Link>

        {/* About Icon */}
        <Link to="/about" className="group flex flex-col items-center">
          <i className="icon text-[22px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300">
            <FaInfoCircle />
          </i>
          <span className="text-sm mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-300">
            About
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
