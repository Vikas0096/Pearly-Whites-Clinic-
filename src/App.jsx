import { Route, Routes } from 'react-router-dom';
import { useState, useRef } from 'react';
import './App.css';

import Home from './pages/Home';
import Treatment from './pages/Treatment';
import Navbar from './component/navbar/Navbar';
import Footer from './component/Footer';
import Facilities from './component/Facilities';
import Award from './component/Award';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Booking from './pages/Booking';

function App() {
    const[showLogin,setShowLogin]=useState(false)

  return (
    <>
      <Navbar setShowLogin={setShowLogin}/>
      {showLogin?<Booking setShowLogin={setShowLogin}/>:<></>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/award" element={<Award />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
