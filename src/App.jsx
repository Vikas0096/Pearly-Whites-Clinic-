import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Disease from './component/Disease'
import Facilities from './component/Facilities'
import AboutDoctor from './component/AboutDoctor'
import PatientReview from './component/PatientReview'
import Award from './component/Award'




function App() {
  
  return (
    <>
   <Navbar/>
   
  <div className='min-h-[70vh]'>
  
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>

  </div>
  <Disease/>
  <Facilities/>
  <AboutDoctor/>
    <PatientReview/>
    <Award/>
    </>
  )
}

export default App
