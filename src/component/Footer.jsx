import React from 'react'

const Footer = () => {
  return (

    <section>

      <div className="grid justify-center bg-blue-500 py-12">
        
        <div className="text-center text-white pb-8">
          <h1 className="text-[36px] font-bold">Get a Free Quote Today</h1>
          <p className="text-[14px] font-normal">Ready to move?</p>
        </div>


          <div className="text-black/70 flex bg-white shadow-xl py-16 px-14 gap-40 rounded-xl">

            <div className="flex flex-col justify-center">
              <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <a href="tel:07920021955"><i className="fa-solid fa-phone text-[20px] text-blue-500"></i></a>
              </div>

              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                  <a href="https://wa.me/07920021955" target="_blank"><img src="/Image/whatsapp.png" className="w-[20px]" /></a>
                </div>
              
              <p className=" text-[16px] font-semibold"><a href="tel:07920021955">07920021955</a></p>
            </div>

            <div className="pt-6 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                  <a href="mailto:info@fokoremovals.co.uk"><img src="/Image/gmail.png" className="w-[20px]" /></a>
                </div>
                
                <p className=" text-[16px] font-semibold"><a href="mailto:info@fokoremovals.co.uk">info@fokoremovals.co.uk</a></p>
              </div>
              
              <div className="pt-6 flex gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                  <a href="https://www.google.com/maps?q=29 Middle Avenue,Loughborough LE11 5HZ" target="_blank"><img src="/Image/location.png" className="w-[20px]" /></a>
                </div>
                
                <p className=" text-[16px] font-semibold"><a href="https://www.google.com/maps?q=29 Middle Avenue,Loughborough LE11 5HZ" target="_blank">29 Middle Avenue, <br />Loughborough <br />LE11 5HZ</a></p>
              </div>
              </div>
            
  
            <form action="" className="flex flex-col shadow-2xl bg-[rgb(243,248,254)] w-[520px] rounded-2xl">

              <div className="text-center text-[24px] font-semibold pt-6 pb-10">Client Contact Form</div>

              <div className="container px-6">
              <div className="pb-4">
                <label htmlFor="name" className="block text-[18px] font-medium">Name</label>
                <input id="name" type="text" placeholder="Enter your name" className="w-[465px] h-[40px] border-b-[1px] border-gray-400 outline-none focus:border-blue-400 bg-transparent" required />
              </div>
              
              <div className="pb-4 pt-1">
                <label htmlFor="email" className="block text-[18px] font-medium">Email</label>
                <input id="email" type="email" placeholder="Enter your mail" className="w-[465px] h-[40px] border-b-[1px] border-gray-400 outline-none focus:border-blue-400 bg-transparent" required />
              </div>

              <div className="pb-4 pt-1">
                <label htmlFor="phone" className="block text-[18px] font-[500]">Phone Number</label>
                <input id="phone" type="number" placeholder="Enter your phone number" className="w-[465px] h-[40px] border-b-[1px] border-gray-400 outline-none focus:border-blue-400 bg-transparent" required />
              </div>

              <div className="pb-4 pt-1">
                <label htmlFor="address" className="block text-[18px] font-medium"> Address</label>
                <input id="address" type="text" placeholder="Enter your address" className="w-[465px] h-[40px] border-b-[1px] border-gray-400 outline-none focus:border-blue-400 bg-transparent" required />
              </div>

              <div className="pb-4 pt-1">
                <label htmlFor="message" className="block text-[18px] font-medium">Message</label>

                <textarea
                  id="message"
                  placeholder="Type your message..."
                  rows="4"
                  className="w-[465px] bg-transparent border-b border-gray-400 outline-none resize-none pt-2 focus:border-blue-400"
                ></textarea>
              </div>
              </div>
              
              <div className="text-center pb-10 pt-2">
                <button type="submit" className="bg-linear-to-r from-blue-600 to-blue-400 px-50 rounded-full py-3 text-[20px] font-semibold cursor-pointer text-white">Submit</button>
              </div>
            
            </form>
          </div>

          <div className="pt-12">
            <p className="text-gray-300 text-center text-[12px]">© 2025 FOKOREMOVALS Technology. All rights reserved.</p>
          </div>
          

         </div>
    </section>
  )
}

export default Footer