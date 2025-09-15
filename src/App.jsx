import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Treatment from './pages/Treatment'





function App() {
  
  return (
    <>
 
   
  <div className='min-h-[70vh]'>
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/treatment" element={<Treatment/>} />
    </Routes>

  </div>
  
    </>
  )
}

export default App
