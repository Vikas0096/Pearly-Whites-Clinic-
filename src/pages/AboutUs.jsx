import React from 'react'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <>  
      <div className="container mx-auto px-4 py-10">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary max-w-2xl mx-auto">
            About Us – Pearly Whites Dental Clinic
          </h2>
        </div>


        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img 
            src={assets.hospital}  
            alt="Hospital" 
            className="w-full md:w-1/2 h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg"
          />
          <p className="w-full md:w-1/2 text-primary leading-relaxed text-justify">
            Welcome to Pearly Whites Dental Clinic, where your smile is our top priority. 
            Located at the heart of the city, Pearly Whites is a modern, state-of-the-art dental 
            facility committed to providing world-class oral health care in a warm, welcoming environment. 
            We blend cutting-edge technology with compassionate service to ensure every patient receives 
            the highest standard of dental treatment—comfortably, safely, and effectively.
            <br /><br />
            Our clinic is built on the foundation of trust, expertise, and long-term relationships. From 
            routine check-ups and cleanings to complex procedures such as root canals, full mouth 
            rehabilitations, and advanced laser treatments, Pearly Whites offers comprehensive dental 
            services under one roof. Whether you're looking to maintain your oral health or enhance your 
            smile, our team is here to help you achieve your goals with personalized care plans tailored 
            to your unique needs.
            <br /><br />
            At Pearly Whites, we believe dentistry is not just a science—it’s an art. That’s why we take 
            time to understand your concerns, answer your questions, and ensure you feel confident at 
            every step of your treatment journey.
          </p>
        </div>

<div className="flex flex-col md:flex-row items-center gap-8">
  <img 
    src={assets.drimage} 
    alt="Dr. Ravi Tiwari" 
    className="w-full md:w-1/4 h-[250px] md:h-[320px] object-cover rounded-xl shadow-lg"
  />
  <div className="w-full md:w-3/4">
    <h3 className="text-2xl font-semibold text-primary mb-3">About Dr. Ravi Tiwari</h3>
    <p className="text-primary leading-relaxed">
      BDS │ MDS (Endodontics & Conservative Dentistry) │ MD (Dental Lasers) │ Diploma (Health Care) <br />
      Consultant – Endodontics, Conservative Dentistry & Dental Lasers
    </p>
    <p className="mt-4 text-primary leading-relaxed text-justify">
      Dr. Ravi Tiwari is a distinguished dental specialist, recognized nationally and internationally 
      for his expertise in root canal treatments, restorative dentistry, and laser-based procedures. 
      Recipient of multiple awards for academic and professional excellence, he is known for combining 
      advanced technology with patient-centered care to deliver precise, painless, and lasting results.
    </p>
  </div>
</div>

  
       
      </div>
    </>
  )
}

export default AboutUs
