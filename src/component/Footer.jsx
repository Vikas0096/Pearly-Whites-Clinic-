import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = ({groupRefs}) => {


  return (
    <div className="container" >
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
                <Link to={'/'}  className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'aboutus'} className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={'facilities'} className="hover:text-white">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to={'treatment'} className="hover:text-white">
                  Treatment
                </Link>
              </li>
              <li>
                <Link to={'award'} className="hover:text-white">
                  Award
                </Link>
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
