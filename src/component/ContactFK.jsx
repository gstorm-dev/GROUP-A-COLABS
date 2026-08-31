import React from 'react'
import Contact from '../page/contact'
import AboutFk from './AboutFk'
import Footer from './Footer'
import Hero from './Hero'

const ContactFK = () => {
  return (
    <div>
      
      <Hero />

    <div className="overflow-hidden">
      <img src="/Image/va.avif" className="w-full object-cover" />
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