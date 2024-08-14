import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <p className="mb-2">1234 Street Name</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Email: info@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="/about-us" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="/contact-us" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="/know-more" className="hover:text-gray-400">Know More</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
            <p className="mb-4">Sign up for our newsletter to get the latest updates.</p>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 mb-4 rounded-lg border border-gray-600 bg-gray-900 text-white"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 py-2 rounded-lg text-white hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
