import React from 'react'
import { awards } from '../assets/assets'
const Award = () => {
  return (
<>

<div className="flex flex-wrap justify-center gap-8">
  {awards.map((data) => (
    <div
      key={data.id}
  
      className="group flex h-full w-full cursor-pointer flex-col justify-between rounded-lg bg-white p-4 shadow-lg 
                 sm:basis-[calc(50%-1rem)] 
                 lg:basis-[calc(33.333%-1.333rem)] 
                 xl:basis-[calc(25%-1.5rem)]"
    >
      <div>
       
        <div className="overflow-hidden rounded-md">
          <img
            src={data.img}
            alt={data.location}
            className="h-[220px] w-full rounded-md object-cover"
          />
          <p className="mb-2 text-lg font-medium text-center">{data.location}</p>
        </div>
      </div>
      
    </div>
  ))}
</div>

      
      

</>
  )
}

export default Award
