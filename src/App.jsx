import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Import Tailwind CSS

import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import KnowMore from './components/KnowMore';
import Footer from './components/Footer'; // Import Footer

const App = () => {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/know-more" element={<KnowMore />} />
          </Routes>
        </main>
        <Footer /> {/* Include Footer */}
      </div>
    </Router>
  );
};

export default App;
