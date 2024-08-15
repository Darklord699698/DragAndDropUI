import React from 'react';

const KnowMore = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-4xl p-8 mx-auto bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-white">Know More</h2>
        <p className="mb-6 text-lg text-gray-300">
          Discover more details about the features and capabilities of our application. We aim to provide a comprehensive understanding of how our platform can benefit you, including its unique features, user benefits, and the latest updates.
        </p>
        <div className="space-y-8">
          <section>
            <h3 className="mb-4 text-2xl font-semibold text-gray-100">Features</h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li><strong>Advanced Analytics:</strong> Our platform offers robust analytics tools that provide real-time insights into your data, helping you make informed decisions and track performance effectively.</li>
              <li><strong>Customizable Dashboards:</strong> Tailor your dashboard to fit your needs with drag-and-drop widgets, custom layouts, and personalized views to see the most relevant information at a glance.</li>
              <li><strong>Seamless Integration:</strong> Easily integrate with other popular tools and platforms, streamlining your workflow and ensuring that you can connect your data across different systems effortlessly.</li>
              <li><strong>Enhanced Security:</strong> Protect your data with industry-standard security measures, including end-to-end encryption, multi-factor authentication, and regular security updates to safeguard your information.</li>
              <li><strong>Collaborative Features:</strong> Work together with your team using features like shared projects, real-time collaboration, and communication tools that make teamwork more efficient and organized.</li>
            </ul>
          </section>
          <section>
            <h3 className="mb-4 text-2xl font-semibold text-gray-100">User Benefits</h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li><strong>Increased Productivity:</strong> Automate routine tasks and streamline processes to free up time for more strategic work, ultimately boosting your overall productivity.</li>
              <li><strong>Improved Decision-Making:</strong> Utilize data-driven insights and comprehensive reports to make better decisions, enhance strategies, and achieve your goals more effectively.</li>
              <li><strong>Greater Flexibility:</strong> Adapt to changing needs and scale your use of the platform with flexible options and customizable features designed to grow with you.</li>
              <li><strong>Better Collaboration:</strong> Foster better communication and teamwork through collaborative tools and shared access, improving project coordination and collective efficiency.</li>
              <li><strong>Enhanced User Experience:</strong> Enjoy a user-friendly interface and intuitive design that make navigating the platform simple and enjoyable, even for new users.</li>
            </ul>
          </section>
          <section>
            <h3 className="mb-4 text-2xl font-semibold text-gray-100">Latest Updates</h3>
            <p className="mb-4 text-gray-300">
              Stay updated with the latest news and improvements about our application. Here are some of the recent updates and new features we've introduced:
            </p>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li><strong>Version 2.5:</strong> Released with new analytics capabilities, including advanced data visualization and custom reporting options.</li>
              <li><strong>Integration Enhancements:</strong> Added support for additional third-party services, including popular CRM and project management tools.</li>
              <li><strong>UI Overhaul:</strong> Updated the user interface with a modern look and improved navigation to enhance usability and overall user experience.</li>
              <li><strong>Performance Improvements:</strong> Optimized the platform for faster load times and smoother interactions, ensuring a more responsive experience.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
