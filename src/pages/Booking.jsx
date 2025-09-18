import React, { useState } from "react";

const Booking = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    appointmentType: "",
    allergies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      {/* Form Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-primary">
        Dental Appointment Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block mb-1 font-medium">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block mb-1 font-medium">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            >
              <option value="">Select</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

          {/* Appointment Type */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-1 font-medium">Type of Appointment</label>
            <select
              name="appointmentType"
              value={formData.appointmentType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            >
              <option value="">Select</option>
              <option>Routine Check-up</option>
              <option>Cleaning</option>
              <option>Toothache or Pain</option>
              <option>Braces Consultation</option>
              <option>Filling or Cavity</option>
              <option>Other</option>
            </select>
          </div>

          {/* Allergies */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-1 font-medium">Do you have any allergies?</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              placeholder="List any allergies"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-secondary transition duration-200"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
