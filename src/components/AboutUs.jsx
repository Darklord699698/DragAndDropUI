import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="mb-8 text-4xl font-bold text-center">About Us</h2>
      <div className="flex flex-col items-center md:flex-row">
        <div className="p-4 md:w-1/2">
          <img
            src="https://shorturl.at/DgKOm"
            alt="About Us"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="p-4 text-gray-700 md:w-1/2">
          <p className="mb-4">
            Welcome to our company! We are passionate about delivering top-quality products
            and services to our customers. Our team is dedicated to innovation, excellence,
            and building lasting relationships with our clients.
          </p>
          <p className="mb-4">
            Our mission is to provide solutions that not only meet but exceed the expectations
            of those we serve. We believe in the power of collaboration, integrity, and
            continuous improvement.
          </p>
          <p>
            Thank you for choosing us as your trusted partner. We look forward to a bright
            future together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
