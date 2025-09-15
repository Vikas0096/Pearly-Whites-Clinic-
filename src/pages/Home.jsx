import React, {useRef} from "react";

import Hero from "../component/Hero";
import Disease from "../component/Disease";
import Facilities from "../component/Facilities";
import AboutDoctor from "../component/AboutDoctor";
import PatientReview from "../component/PatientReview";
import Award from "../component/Award";
import Footer from "../component/Footer";
import Navbar from "../component/navbar/Navbar";


const Home = () => {
const treatmentRef = useRef(null);
  const facilitiesRef = useRef(null);
  const awardRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <div>
      <Navbar   scrollRefs={{
    treatmentRef,
    facilitiesRef,
    awardRef,
    aboutRef,
    footerRef
  }} />
      <Hero />
      <Disease innerRef={treatmentRef} />
      <Facilities innerRef={facilitiesRef}/>
      <AboutDoctor innerRef={aboutRef} />
      <PatientReview />
      <Award innerRef={awardRef} />
      <Footer innerRef={footerRef} scrollRefs={{
    treatmentRef,
    facilitiesRef,
    awardRef,
    aboutRef,
  }}/>
    </div>
  );
};

export default Home;
