import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
<>
    <div
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.hero})` }}>
    
    </div>

</>
  )
}

export default Hero
