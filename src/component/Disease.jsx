import React from 'react';
import { diseaseData } from '../assets/assets'; // Make sure this path is correct

const Disease = () => {
  return (
    <>
      <div className="container my-14 px-4">
        {/* Section Header */}
        <div>
          <h1 className="text-3xl text-center font-semibold text-primary dark:text-secondary md:text-4xl mb-10 max-w-[600px] mx-auto">
            Treatment Offer
          </h1>
        </div>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
          {diseaseData.map((data) => (
            <div
              key={data.id}
              className="group flex h-full max-w-sm cursor-pointer flex-col justify-between rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800 dark:text-white"
            >
              <div>
                <p className="mb-2 text-lg font-medium">{data.title}</p>
                <div className="overflow-hidden rounded-md">
                  <img
                    src={data.image_url}
                    alt={data.title} // Added alt text for accessibility
                    className="h-[220px] w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="mt-3 text-base font-light">
                {data.description}{' '}
                <span className="font-medium text-green-700 underline hover:text-primary dark:hover:text-secondary">
                  Read more »
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Disease;
