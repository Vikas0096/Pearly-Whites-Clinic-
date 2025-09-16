import React from 'react';
import { diseaseData } from '../assets/assets'; 
import { Link } from 'react-router-dom';

const Disease = ({ innerRef }) => {
  return (
    <>
      <div className="container my-14 px-4" ref={innerRef}>
  
        <div>
          <h2 className="text-3xl text-center font-semibold text-primary md:text-4xl mb-10 max-w-[600px] mx-auto">
            Treatment we offer
          </h2>
        </div>


<div className="flex flex-wrap justify-center gap-8">
  {diseaseData.map((data) => (
    <div
      key={data.id}
  
      className="group flex h-full w-full cursor-pointer flex-col justify-between rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800 dark:text-white 
                 sm:basis-[calc(50%-1rem)] 
                 lg:basis-[calc(33.333%-1.333rem)] 
                 xl:basis-[calc(25%-1.5rem)]"
    >
      <div>
        <p className="mb-2 text-lg font-medium">{data.title}</p>
        <div className="overflow-hidden rounded-md">
          <img
            src={data.image_url}
            alt={data.title}
            className="h-[220px] w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <p className="mt-3 text-base font-light">
        {data.description}{' '}
        <Link className="font-medium text-green-700 underline hover:text-primary" >
          Read more »
        </Link>
      </p>
    </div>
  ))}
</div>
      </div>
    </>
  );
};

export default Disease;
