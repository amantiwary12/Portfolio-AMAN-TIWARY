import React, { useState } from "react";
import Imgs from "../../Accest/myphoto.jpg"; // check path

const Navqbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Imgs} alt="logo" className="h-10 w-10 mr-2" />
        <a href="/" className="text-2xl font-bold text-black dark:text-white">
          My Portfolio
        </a>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black dark:text-white focus:outline-none">
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 pr-4 text-black dark:text-white">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 text-black dark:text-white md:hidden z-10">
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/About" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="/Login" onClick={() => setIsOpen(false)}>Login</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navqbar;
