import React, { useState } from "react";
import { treatmentData } from "../assets/assets";

const Treatment = () => {
  const [disease, setDisease] = useState(treatmentData[0]); 

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl text-center font-semibold text-primary mb-8 pt-4">
        Treatment We Offer
      </h2>

      <div className="flex flex-col md:flex-row gap-6">

        <div className="w-full md:w-1/3">
          <div className="flex flex-col gap-2 text-primary font-medium">
            {treatmentData.map((data) => (
              <button
                key={data.id}
                onClick={() => setDisease(data)}
                className={`text-left px-3 py-2 rounded-lg transition ${
                  disease.id === data.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>

      
        <div className="w-full md:w-2/3 text-primary space-y-3">
          <img
            src={disease.image_url}
            alt={disease.title}
            className="w-full md:w-[350px] h-[250px] object-cover shadow"
          />
          <p>{disease.description}</p>
          <p>
            <span className="font-bold">Symptom:</span> {disease.symptom}
          </p>
          <p>
            <span className="font-bold">Diagnosis:</span> {disease.diagnosis}
          </p>
          <p>
            <span className="font-bold">Treatment:</span> {disease.treatment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
