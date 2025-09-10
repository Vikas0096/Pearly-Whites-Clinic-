import React from "react";
import { assets } from "../../assets/assets";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
<div className="w-full bg-primary text-sm">
  <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-4 py-3">

    {/* Logo */}
    <a href="/" className="flex-shrink-0">
      <img src={assets.drlogo} alt="Logo" className="h-12 w-auto md:h-20" />
    </a>

    {/* Hospital Info - hidden on md and below */}
    <div className="hidden md:flex flex-col text-white text-left">
      <span className="text-lg sm:text-xl md:text-2xl font-semibold">
        Pearly Whites clinic
      </span>
      <span className="text-xs sm:text-sm md:text-base">
        Kapoorthala Chandralok Tower, Aliganj, Lucknow (226024)
      </span>
    </div>

    {/* Contact & CTA */}
    <div className="flex items-center gap-3">

      {/* Contact - hidden on md and below */}
      <div className="hidden md:block text-white text-xs sm:text-sm md:text-base text-right">
        <a href="mailto:RavitiwariXXXX@gmail.com" className="block">
          RavitiwariXXXX@gmail.com
        </a>
        <a href="tel:+91961630xxxx" className="block">
          +91-961630xxxx
        </a>
      </div>

      {/* CTA Button */}
      <button className="cursor-pointer animate-pulse text-red-500 hover:text-white hover:bg-red-500 text-sm sm:text-base md:text-lg lg:text-xl font-bold border border-red-500 px-3 py-1 rounded-md transition duration-300">
        Book an Appointment
      </button>

    </div>
  </div>
</div>



      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 py-3 border-b border-gray-200 bg-white shadow-sm transition-all">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm lg:text-base">
          <a href="/" className="hover:text-primary hover:underline transition">
            Home
          </a>
          <a href="#" className="hover:text-primary hover:underline transition">
            About Us
          </a>
          <a href="#" className="hover:text-primary hover:underline transition">
            Facilities
          </a>
          <a href="#" className="hover:text-primary hover:underline transition">
            Treatment
          </a>
          <a href="#" className="hover:text-primary hover:underline transition">
            Awards
          </a>
          <a href="#" className="hover:text-primary hover:underline transition">
            Gallery
          </a>
          <a href="#" className="hover:text-primary hover:underline transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden focus:outline-none"
        >
          {open ? (
            // Close Icon
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
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 20"
            >
              <rect width="24" height="2.5" rx="1.25" fill="currentColor" />
              <rect
                y="8"
                width="18"
                height="2.5"
                rx="1.25"
                fill="currentColor"
              />
              <rect
                y="16"
                width="24"
                height="2.5"
                rx="1.25"
                fill="currentColor"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[60px] left-0 w-full bg-white shadow-md flex-col items-start gap-4 px-6 py-6 text-gray-700 text-sm transform transition-all duration-300 md:hidden ${
            open
              ? "flex opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-4"
          }`}
        >
          <a href="#" className="w-full transition hover:bg-[#88b3ce]">
            Home
          </a>
          <a href="#" className="w-full transition hover:bg-[#88b3ce]">
            About Us
          </a>
          <a href="#" className="w-full transition hover:bg-[#88b3ce]">
            Facilities
          </a>
          <a href="#" className="w-full transition hover:bg-[#88b3ce]">
            Treatment
          </a>
          <a href="#" className="w-full transition hover:bg-[#88b3ce]">
            Awards
          </a>
          <a href="#" className="w-full transition hover:bg-[#88b3ce]">
            Gallery
          </a>
          <a href="#" className="w-full transition hover:bg-[#88b3ce]">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
