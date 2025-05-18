import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-indigo-100 to-blue-100 backdrop-blur-md shadow-md
 transition-all"
>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Fin<span className="text-gray-900">Track</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "Features", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-blue-600 hover:underline font-medium transition">Login</button>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 transition">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-6 py-4 space-y-3 bg-white/80 backdrop-blur-md text-gray-700 font-medium transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className="block hover:text-blue-600">Home</a>
        <a href="#features" className="block hover:text-blue-600">Features</a>
        <a href="#pricing" className="block hover:text-blue-600">Pricing</a>
        <hr className="border-gray-200" />
        <a href="#" className="block hover:text-blue-600">Login</a>
        <a
          href="#"
          className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-4 py-2 rounded-lg shadow hover:shadow-lg"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
