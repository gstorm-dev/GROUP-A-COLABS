import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50">

      <header className="m-4">
      <nav className="bg-white flex justify-center gap-10  py-2 shadow-[0_8px_16px_rgba(0,0,200,0.18)] w-[90%] max-w-[540px] mx-auto rounded-[10px]">
        <div className="flex justify-center items-center gap-2">
        <img src="/Image/newlogo.png" />
        <h1 className="text-[24px] font-bold tracking-[-1px] font-sans-serif text-[rgb(0,123,255)]">
          FOKOREMOVALS
        </h1>
        </div>
        
        
        <div className="flex gap-4 text-[24px]">
          <Link to='/Home' className="text-[rgb(0,123,255)] tracking-[-2px] ">Home</Link>
          <Link to='/Contact' className="text-gray-600 font-Arial font-normal tracking-[-2px] hover:text-[oklch(0.623_0.214_259.815)] duration-[0.5s]">Contact</Link>
          <Link to='/Service' className="text-gray-600 font-Arial font-normal tracking-[-2px] hover:text-[oklch(0.623_0.214_259.815)] duration-[0.5s]">Service</Link>
        </div>
      </nav>
     </header>
    </section>
  )
}

export default Navbar