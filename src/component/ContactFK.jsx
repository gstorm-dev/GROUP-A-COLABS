import React from 'react'
import AboutFk from './AboutFk'
import Footer from './Footer'
import Hero from './Hero'
import Service1 from './Service1'

const ContactFK = () => {
  return (
    <div>
      
      <Hero />

    <div className="overflow-hidden">
      <img src="/Image/va.avif" className="w-full object-cover" />
    </div>
      <div>
        <Service1/>
      </div>
      <div>
        <AboutFk />
        <div className='bg-white h-1'></div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ContactFK