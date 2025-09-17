import React from 'react'
import { assets } from '../assets/assets'

const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary max-w-2xl mx-auto">
            Contact Us – Pearly Whites Dental Clinic
          </h2>
        </div>

  
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-xl shadow-md">

          <div className="flex justify-center md:w-1/2">
            <img
              src={assets.map}
              alt="Clinic Location Map"
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-lg shadow"
            />
          </div>

    
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <p className="text-lg font-medium text-gray-800">
              <span className="font-semibold">Address:</span> <br />
              Kapoorthala, Chandralok Tower, Aliganj, Lucknow (226024)
            </p>
            <p className="text-lg font-medium text-gray-800">
              <span className="font-semibold">Mobile:</span> 96163-0xxxx
            </p>
            <p className="text-lg font-medium text-gray-800">
              <span className="font-semibold">Email:</span> Ravitiwari-xxxx@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
