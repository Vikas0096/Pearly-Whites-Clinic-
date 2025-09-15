import React from 'react'
import Navbar from '../component/navbar/Navbar'
import { diseaseData } from '../assets/assets'; 
const Treatment = () => {
  return (
<>
    <Navbar/>
    <div className='container my-14 px-4'>
        <div>
          <h2 className="text-3xl text-center font-semibold text-primary md:text-4xl mb-10 max-w-[600px] mx-auto">
            Treatment we offer
          </h2>
        </div>
      <div className='flex flex-row w-full gap-10 m-2'>
        <div className='bg-red-600 flex-1'>
          hello
        </div>
        <div className='bg-amber-300 flex-2'>world</div>
      </div>


    </div>
</>
  )
}

export default Treatment
