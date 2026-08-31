import React from 'react'

const Hero = () => {
  return (
    <section>

      <div className="bg-black/50 h-240 absolute bottom-0 top-0 w-full z-[-100]"></div>
      <div className="text-white flex justify-center gap-[220px] pt-20">
      
      <div>
        <div>
          <div className="pb-2">
            <h3 className="text-[14px] text-white inline-block">Trusted By 100+</h3>
            <img src="/Image/Group 3.png" className="h-[16px] w-12 inline-block ml-1" />
          </div>
        
        <h1 className="text-[50px] font-semibold tracking-[-2px] leading-[62px] pb-2"><span className="text-[oklch(0.623_0.214_259.815)]">Foko Removals</span> – Your <br />Move, Our Mission</h1>
        <p className="text-[18px] font-normal text-[rgb(197,207,227)]">Reliable man & van and removal services, Based in <br />Loughborough, serving across the UK.</p>
      </div>

      <div className="pt-8 flex gap-2">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <a href="tel:07920021955"><i className="fa-solid fa-phone text-[20px]"></i></a>
        </div>
        
        <p className=" text-[18px] pt-2 font-semibold"><a href="tel:07920021955">07920021955</a></p>
      </div>

      <div className="pt-8 flex gap-2">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <a href="mailto:info@fokoremovals.co.uk"><i className="fa-solid fa-envelope text-[20px]"></i></a>
        </div>
        
        <p className=" text-[18px] pt-2 font-semibold"><a href="mailto:info@fokoremovals.co.uk">info@fokoremovals.co.uk</a></p>
      </div>
      </div>
      
      <form action="" className="flex flex-col shadow-2xl bg-white/10 backdrop-blur-md w-[80%] max-w-[450px] border border-white/20 rounded-2xl">

        <div className="text-center text-[24px] font-semibold pt-6 pb-10">Client Contact Form</div>

        <div className="px-6">
        <div className="pb-4">
          <label htmlFor="name" className="block text-[18px] font-medium">Name</label>
          <input id="name" type="text" placeholder="Enter your name" className="w-[400px] h-[40px] border-b-[1px] border-white/60 outline-none focus:border-blue-400 bg-transparent" required />
        </div>
        
        <div className="pb-4 pt-1">
          <label htmlFor="email" className="block text-[18px] font-medium">Email</label>
          <input id="email" type="email" placeholder="Enter your mail" className="w-[400px] h-[40px] border-b-[1px] border-white/60 outline-none focus:border-blue-400 bg-transparent" required />
        </div>

        <div className="pb-4 pt-1">
          <label htmlFor="phone" className="block text-[18px] font-[500]">Phone Number</label>
          <input id="phone" type="number" placeholder="Enter your phone number" className="w-[400px] h-[40px] border-b-[1px] border-white/60 outline-none focus:border-blue-400 bg-transparent" required />
        </div>

        <div className="pb-4 pt-1">
          <label htmlFor="address" className="block text-[18px] font-medium"> Address</label>
          <input id="address" type="text" placeholder="Enter your address" className="w-[400px] h-[40px] border-b-[1px] border-white/60 outline-none focus:border-blue-400 bg-transparent" required />
        </div>

        <div className="pb-4 pt-1">
          <label htmlFor="message" className="block text-[18px] font-medium">Message</label>

          <textarea
            id="message"
            placeholder="Type your message..."
            rows="4"
            className="w-[400px] bg-transparent border-b border-white/60 outline-none resize-none text-white placeholder:text-white/60 pt-2 focus:border-blue-400"
          ></textarea>
        </div>
        </div>
        
        <div className="text-center pb-10 pt-2">
           <button type="submit" className="bg-linear-to-r from-blue-600 to-blue-400 px-34 rounded-full py-3 text-[20px] font-semibold cursor-pointer">Send Message</button>
        </div>
       
      </form>
    </div>
    
    </section>
  )
}

export default Hero