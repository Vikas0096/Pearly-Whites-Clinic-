import React from 'react';
import { assets } from '../assets/assets';

const AboutDoctor = () => {
  return (
    <>
    <div className="container my-14 px-4" >
     <h2 className="text-3xl text-center font-semibold text-primary md:text-4xl mb-10 max-w-[600px] mx-auto">
          About us
          </h2>


     
      <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 m-4 md:m-10 p-6 bg-[#84cffa] text-primary rounded-lg'>
        
   
        <img 
          src={assets.drimage} 
          alt="Dr. Ravi Tiwari" 
          className='w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg'
        />
        

        <div className='flex flex-col gap-2 text-center md:text-left'>
          
       
          <h2 className='text-2xl md:text-3xl font-extrabold'>Dr. Ravi Tiwari</h2>
          <h3 className='text-lg md:text-xl font-semibold'>BDS │ MDS │ MD │ Diploma</h3>
          <h3 className='text-lg md:text-xl'>Consultant – Endodontics, Conservative Dentistry & Dental Lasers</h3>
          
         
          <p className='mt-2 max-w-2xl'>
            Dr. Ravi Tiwari is a distinguished dental specialist, recognized nationally and internationally for his expertise in root canal treatments, restorative dentistry, and laser-based procedures. Recipient of multiple awards for academic and professional excellence, he is known for combining advanced technology with patient-centered care to deliver precise, painless, and lasting results.
          </p>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutDoctor;