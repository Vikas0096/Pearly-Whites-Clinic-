import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  
  return (
    <>
   <Navbar/>
   
  <div className='min-h-[70vh]'>
  
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>

  </div>
    </>
  )
}

export default App
