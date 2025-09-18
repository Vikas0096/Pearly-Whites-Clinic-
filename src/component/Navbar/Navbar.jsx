import React from "react";

import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Navbar({setShowLogin}) {
  const [open, setOpen] = React.useState(false);

  

  return (
    <>
      <div className="container ">
        <div className="w-full bg-primary text-sm max-w-7xl mx-auto flex flex-row items-center justify-between px-4 py-3">

          <Link to={'/'}  className="flex-shrink-0">
            <img src={assets.drlogo} alt="Logo" className="h-12 w-auto md:h-20" />
          </Link>

          <div className="hidden md:flex flex-col text-white text-left">
            <span className="text-lg sm:text-xl md:text-2xl font-semibold">
              Pearly Whites clinic
            </span>
            <span className="text-xs sm:text-sm md:text-base">
              Kapoorthala Chandralok Tower, Aliganj, Lucknow (226024)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block text-white text-xs sm:text-sm md:text-base text-right">
              <a href="mailto:RavitiwariXXXX@gmail.com" className="block">
                RavitiwariXXXX@gmail.com
              </a>
              <a href="tel:+91961630xxxx" className="block">
                +91-961630xxxx
              </a>
            </div>

            <button onClick={() => setShowLogin(true)} className="cursor-pointer animate-pulse text-red-500 hover:text-white hover:bg-red-500 text-sm sm:text-base md:text-lg lg:text-xl font-bold border border-red-500 px-3 py-1 rounded-md transition duration-300">
              Book an Appointment
            </button>
          </div>
        </div>
    

      <nav className="sticky text-lg top-0 z-50 font-semibold flex items-center justify-between px-4 sm:px-8 lg:px-16 py-3 border-b border-gray-200 bg-white shadow-sm transition-all">

        <Link to={'/'}>
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto sm:h-12 lg:h-14"
              
          />
          </Link>


        <div className="hidden md:flex items-center gap-6 text-primary text-sm lg:text-base">
          <Link to={'/'}  className="hover:text-secondary hover:underline transition"   >
            Home
          </Link>
          
          <Link to={'/treatment'}  className="hover:text-secondary hover:underline transition">
            Treatment
          </Link>
          <Link to={'facilities'}   className="hover:text-secondary hover:underline transition">
            Facilities
          </Link>
          <Link to={'award'}  className="hover:text-secondary hover:underline transition">
            Awards
          </Link>
          <Link to={'aboutus'}  className="hover:text-secondary hover:underline transition">
            About us
          </Link>
          <Link to={'contactus'}  className="hover:text-secondary hover:underline transition">
            Contact us
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden focus:outline-none"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 20"
            >
              <rect width="24" height="2.5" rx="1.25" fill="currentColor" />
              <rect y="8" width="18" height="2.5" rx="1.25" fill="currentColor" />
              <rect y="16" width="24" height="2.5" rx="1.25" fill="currentColor" />
            </svg>
          )}
        </button>

        <div
          className={`absolute top-[60px] left-0 w-full bg-white shadow-md flex-col items-start gap-4 px-6 py-6 text-gray-700 text-sm transform transition-all duration-300 md:hidden ${
            open
              ? "flex opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-4"
          }`}
        >
          <Link to={'/'}    className="w-full transition hover:bg-[#88b3ce]">
            Home
          </Link>
          
          <Link to={'treatment'}  className="w-full transition hover:bg-[#88b3ce]">
            Treatment
          </Link>
          <Link to={'facilities'}  className="w-full transition hover:bg-[#88b3ce]">
            Facilities
          </Link>
          <Link to={'award'} className="w-full transition hover:bg-[#88b3ce]">
            Awards
          </Link>
          <Link to={'aboutus'} className="w-full transition hover:bg-[#88b3ce]" >
            About us
          </Link>
          <Link to={'contactus'} className="w-full transition hover:bg-[#88b3ce]" >
            Contact us
          </Link>
        </div>
      </nav>
     </div> </>
  );
}

export default Navbar;
