import React from 'react'
import { facilitiesdata } from '../assets/assets'; 

const Facilities = () => {
  return (
<>
    <div className="container" >
       <h2 className="text-3xl text-center font-semibold text-primary md:text-4xl mb-10 max-w-[600px] mx-auto">
            Facilities we offer
      </h2>

 <div className="flex flex-wrap -mx-4">
        {facilitiesdata.map((data) => (
          <div key={data.id} className="w-full lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded shadow-sm p-4 h-full flex flex-col items-center text-center">
              <img
                src={data.img}
                alt={data.title}
                className="mb-4 w-50 h-50 sm:w-58 sm:h-58 md:w-66 md:h-66 object-cover rounded"
              />
              <p className="text-lg font-medium text-gray-700">{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
</>
  )
}

export default Facilities
