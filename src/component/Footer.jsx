import React from "react";
import { assets } from "../assets/assets";

const Footer = ({ innerRef, scrollRefs }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={innerRef} className="container">
      <footer className="w-full bg-primary text-gray-300 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
 
          <div>
            <img
              src={assets.logo}
              alt="Logo"
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
            <p className="text-sm pt-2">
              Delivering quality healthcare services with compassion and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={scrollToTop} className="hover:text-white">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll(scrollRefs.aboutRef)} className="hover:text-white">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll(scrollRefs.facilitiesRef)} className="hover:text-white">
                  Facilities
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll(scrollRefs.treatmentRef)} className="hover:text-white">
                  Treatment
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll(scrollRefs.awardRef)} className="hover:text-white">
                  Award
                </button>
              </li>
            </ul>
          </div>

          {/* Treatment Offers */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Treatment offer</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Dental Caries</a></li>
              <li><a href="#" className="hover:text-white">Gingivitis</a></li>
              <li><a href="#" className="hover:text-white">Periodontitis</a></li>
              <li><a href="#" className="hover:text-white">Tooth Sensitivity</a></li>
              <li><a href="#" className="hover:text-white">Malocclusion</a></li>
              <li><a href="#" className="hover:text-white">Pulpitis</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm">Kapoorthala Chandralok Tower, Aliganj, Lucknow (226024)</p>
            <p className="text-sm">+91 961630xxxx</p>
            <p className="text-sm">Ravitiwarixxx@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          © 2013 Your Clinic. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
