import React, { useState, useEffect } from "react";
import Imgs from "../../Accest/myphoto.jpg"; // Make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={Imgs} 
            alt="logo" 
            className="h-10 w-10 mr-3 rounded-full border-2 border-white shadow-lg" 
          />
          <a 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            My Portfolio
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/About" },
            { name: "Projects", path: "/Projects" },
            { name: "Contact", path: "/Contact" },
          ].map((item, index) => (
            <li key={index}>
              <a 
                href={item.path} 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a 
              href="/Login" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Login
            </a>
          </li>
        </ul>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none transition-transform duration-300 transform hover:rotate-90"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current rounded transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current rounded transition duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-current rounded transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 w-full h-0 bg-white dark:bg-gray-900 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "h-screen" : ""}`}>
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {[
            { name: "Home", path: "/", icon: "🏠" },
            { name: "About", path: "/About", icon: "👤" },
            { name: "Projects", path: "/Projects", icon: "💼" },
            { name: "Contact", path: "/Contact", icon: "📞" },
            { name: "Login", path: "/Login", icon: "🔐" },
          ].map((item, index) => (
            <li key={index} className="opacity-0 transform translate-y-4" style={{ animation: isOpen ? `fadeIn 0.5s ease forwards ${index * 0.1 + 0.3}s` : "none" }}>
              <a 
                href={item.path} 
                className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;