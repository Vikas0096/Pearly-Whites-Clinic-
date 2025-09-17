import React from "react";

import Hero from "../component/Hero";
import Disease from "../component/Disease";
import Facilities from "../component/Facilities";
import AboutDoctor from "../component/AboutDoctor";
import PatientReview from "../component/PatientReview";
import Award from "../component/Award";




const Home = () => {
  


  return (
    <div>

      <Hero />
      <Disease  />
      <Facilities  />
      <AboutDoctor  />
      <PatientReview />
      <Award  />

    </div>
  );
};

export default Home;
