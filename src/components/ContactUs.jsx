// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-900">
      <div className="w-full max-w-lg p-8 text-gray-900 bg-white rounded-lg shadow-lg">
        {/* Informative Section */}
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-700">
            We value your feedback and inquiries. Please use the form below to get in touch with us, and we'll get back to you as soon as possible.
          </p>
        </div>
        
        {/* Contact Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
