import React from 'react'
import logo from '../assets/img.png';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col items-center h-[90vh] pt-16'>
        <img src={logo} alt="x" className='w-80 h-80 relative'/>
        <p className="absolute top-80 text-xs pt-[4.5rem]">UNLEASHING THE POWER OF BLOCKCHAIN</p>
        <button className='bg-[#1C1927] p-3 rounded-xl mt-8 text-red-400 font-bold'> BUY ANC </button>
      </div>
    </div>
  )
}

export default Home
