import React from 'react'
import img from '../assets/img.png'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[#DAD6EE] text-sm tracking-wide'>MORE INFORMATION</h1>
        <div className='w-40 h-[1px] bg-[#A40A0A]'> </div>
        <p className='text-[#cbc8d6] text-[2rem] font-bold'>Anonym Chain</p>
        <h2 className='text-sm p-5 text-[#918CA9] tracking-widest'>Unleashing the power of blockchain.</h2>
        <button className='p-4 text-[.6rem] tracking-widest bg-[#1C1927] text-white rounded-xl'> JOIN TELEGRAM </button>
        <img src={img} alt="x" className='flex w-52 p-4'/>
      </div>
    </div>
  )
}

export default Footer
