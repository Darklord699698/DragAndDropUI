import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      {/* Icon Placeholder */}
      <div className="text-2xl mr-4">
        <span>📘</span> {/* Example icon */}
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold mr-4">
        Drag and Drop
      </h1>

      {/* Search Bar */}
      <div className="relative flex-grow mx-4 max-w-3xl">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pl-10 bg-gray-700 text-white rounded-lg w-full"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 ml-auto items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
        <Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link>
        <Link to="/know-more" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100"></span>
          <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Know More
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
