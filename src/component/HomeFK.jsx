import React from 'react'
import Home from '../page/Home'

const HomeFK = () => {
  return (
  <main className="">
      <div className="bg-black/50 h-240 absolute bottom-0 top-0 w-full z-[-100]"></div>
    <div></div>

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


    <article className="pt-20">
      <section className="pt-20 bg-white pb-15">

      <div className="flex justify-center gap-155">
        <div className="">
          <h1 className="text-[50px] font-[serif] font-medium tracking-[-1px]">What we offer at</h1>
          <span className="text-[50px] font-serif text-blue-600 font-medium tracking-[-3px]">Fokoremovals</span>
          <p className="text-[18px] font-Arial text-gray-500">Trusted experts in home and office relocations, <br />furniture collection and timely delivery</p>
        </div>

        <div className="">
          <h3 className="text-[18px] font-Arial text-gray-500">More than 100 Homes, offices, <br />companies have used our services <br />during the years.</h3>
        </div>
      </div>
      
      <div className=" py-12 flex justify-center gap-8">
        <div className="shadow-[0_10px_20px_rgb(191,209,249,1)] overflow-hidden  w-100 rounded-xl duration-[0.8s] hover:scale-103 ">
          <img src="/Image/hh.jpg" className="object-cover w-100 h-70" />
          <h3 className="p-5 text-[18px] font-semibold">House Removals</h3>
          <p className="pb-10 pl-5 pr-10 text-[14px] text-gray-600">Trusted experts in home and office furniture collection and timely delivery.</p>
        </div>

        <div className="shadow-[0_10px_20px_rgba(191,209,249,1)] overflow-hidden  w-100 rounded-xl duration-[0.8s] hover:scale-103 ">
          <img src="/Image/off.jpg" className="object-cover w-100 h-70" />
          <h3 className="p-5 text-[18px] font-semibold">Office Relocation</h3>
          <p className="pb-10 pl-5 text-[14px] text-gray-600">Seamless moves that minimize downtime and keep your business running smoothly.</p>
        </div>

        <div className="shadow-[0_10px_20px_rgba(191,209,249,1)] overflow-hidden w-100 rounded-xl duration-[0.8s] hover:scale-103 ">
          <img src="/Image/van.webp" className="object-cover w-100 h-70" />
          <h3 className="p-5 text-[18px] font-semibold">Man & Van Services</h3>
          <p className="pb-10 pl-5 pr-8 text-[14px] text-gray-600 ">Flexible transport solutions for small or large moves at short notice.</p>
        </div>

      </div>
      <div className="flex justify-around pl-280">
        <a href="#" className="text-blue-600 text-[16px] font-semibold hover:translate-x-2 hover:underline">See All What We Offer →</a>
      </div>
    </section>
    </article>

    <div className="overflow-hidden">
      <img src="/Image/va.avif" className="w-full object-cover" />
    </div>
    
    <aside className="bg-blue-600">
      <div className="max-w-[1300px] mx-auto flex items-end justify-between px-2 py-12">
        <div>
          <h2 className="text-5xl font-serif text-white">About Us</h2>

          <p className="mt-4 max-w-[780px] text-white/80 leading-8">
            At Foko Removals, we're all about making your move smooth and stress-free.
            Whether it's a single item, full house, or office relocation — we've got
            you covered with a friendly team, fair prices, and full insurance for
            peace of mind.
          </p>
        </div>

        <p className="text-white/70">Reliable, Fast & Timely</p>
      </div>
    </aside>

    <section className="bg-white">

      <div className="flex justify-between max-w-[1300px] mx-auto px-2 py-20">
        <div>
        <h1 className="text-5xl font-medium font-serif tracking-[-2px] leading-18">Why choose <br /><span className="text-blue-600">Fokoremovals</span></h1>

        <p className="text-[18px] text-gray-500">Your trusted partner for stress-free moves <br />across the UK</p>
      </div>

        <p className="text-[18px] max-w-[290px] text-gray-500 leading-8">At Fokoremovalsltd, we combine professionalism, 
           reliability and care to make every move smooth and hassle-free.
        </p>
      </div>
      
      <section className="py-6 max-w-[1300px] mx-auto">
      <div className="grid grid-cols-3 justify-center items-center gap-4">
        <div className="border max-w-[420px] h-[350px] px-4 rounded-xl border-gray-300 duration-[0.5s] hover:scale-103">
          <div className="relative">
            <img src="/Image/road.png" className="w-[100%] h-[220px] object-cover ml-5 rounded-xl scale-[1.1]" />
            <img src="/Image/truck.png" className="w-[300px] absolute bottom-[60px] right-[-45px]" />
          </div>
    
          <h2 className="text-[22px] font-extrabold font-serif text-[rgb(26,26,26)] pt-6">Fully Insured Goods in Transit</h2>
          <p className="text-[14px] font-normal text-[rgb(85,85,85)] font-serif pt-1">Enjoy complete peace of mind knowing your items are <br />protected throughout the move.</p>
        </div>

        <div className="border w-[420px] h-[350px] px-4 rounded-xl border-gray-300 relative duration-[0.5s] hover:scale-103">
          <div className="bg-blue-50 rounded-[8px] h-50 mt-[20px]"></div>
            <img src="/Image/courier.png" alt="" className="absolute top-[-118px] left-[90px]" />

          <h2 className="text-[22px] font-extrabold font-serif text-[rgb(26,26,26)] pt-4">Professional, Polite, and Punctual</h2>
          <p className="text-[14px] font-normal text-[rgb(85,85,85)] font-serif pt-1">Our experienced team delivers a courteous, timely, and <br />hassle-free service every time.</p>
        </div>




        <div className="border w-[410px] h-[350px] px-4 rounded-xl border-gray-300 relative duration-[0.5s] hover:scale-103">

            <div className="flex items-center shadow-[2px_4px_8px_6px] shadow-[rgb(149,149,149)] gap-2 mt-6 px-4 py-4 w-92 rounded-[8px] bg-white opacity-75 blur-[1px]">
              <img src="/Image/003.png" className="w-[40px]" />
            <div>
              <p className="text-[12px]">Man & Van</p>
              <p className="text-[10px]">Quorn</p>
            </div>
            
            <p className="text-[11px] ml-[176px]">Premium</p>
            </div>

            <div className="pt-4 mb-[100px]">
              <p className="text-[12px] text-gray-500">Last week</p>
            </div>

            <div className="flex items-center shadow-[2px_4px_8px_6px] shadow-[rgb(149,149,149)] gap-2 px-4 py-4 rounded-[8px] absolute rotate-[-9deg] bg-white top-[-16px] left-[19px] blur-[1px]">
              <img src="/Image/002.png" className="w-[40px]" />
            <div>
              <p className="text-[12px]">House Removal</p>
              <p className="text-[10px]">Loughborough</p>
            </div>

            <p className="text-[11px] ml-[140px]">Premium</p>
            </div>

            <div className="flex items-center shadow-[2px_4px_8px_6px] shadow-[rgb(149,149,149)] gap-2 px-4 py-4 rounded-[8px] absolute bg-white top-[-48px] left-[18px]">
              <img src="/Image/01.png" className="w-[40px]" />
            <div>
              <p className="text-[12px]">Office Relocations</p>
              <p className="text-[10px]">Hathern</p>
            </div>

            <p className="text-[11px] ml-[140px]">Premium</p>
            </div>
          
          <div className="flex items-center shadow-[1px_4px_8px_1px] shadow-stone-300 gap-2 px-2 w-88 py-4 mt-8 absolute rounded-[8px] rotate-[-4deg] bg-white top-[125px] left-[26px]">
            <img src="/Image/005.png" className="w-[40px]" />
          <div>
            <p className="text-[12px]">Storage</p>
            <p className="text-[10px]">Kegworth</p>
          </div>

          <p className="text-[11px] ml-[140px]">Premium</p>
          </div>
          
          <div className="flex items-center shadow-[1px_1px_20px_1px] shadow-stone-300 gap-2 px-4 py-4 rounded-[8px] absolute rotate-[2deg] bg-white top-[138px] left-[23px]">
            <img src="/Image/004.png" className="w-[40px]" />
          <div>
            <p className="text-[12px]">Packing</p>
            <p className="text-[10px]">Barrow upon Soar</p>
          </div>

          <p className="text-[11px] ml-[140px]">Premium</p>
          </div>

          <h2 className="text-[22px] font-extrabold font-serif text-[rgb(26,26,26)] pt-4">Affordable and Flexible Options</h2>
          <p className="text-[14px] font-normal text-[rgb(85,85,85)] font-serif pt-1">Choose a plan that fits your schedule and budget without compromising on quality</p>
        </div>
        
      </div>

      <div className="grid grid-cols-2 justify- mt-8 gap-4 pb-10">
          <div className="border overflow-hidden rounded-xl border-gray-300 duration-[0.5s] hover:scale-103 w-[630px]">
          <img src="/Image/Shop.png" className="w-[630px] h-[210px] object-cover rounded-[8px]" />
          <h1 className="text-[22px] pt-[50px] font-serif font-extrabold px-4">Your Belongings Handled with Care</h1>
          <p className="text-[14px] font-normal pb-6 px-4 text-gray-600">We treat your possessions as if they were our own, ensuring safe transport at every stage.</p>
        </div>

        <div className="border overflow-hidden rounded-xl border-gray-300 duration-[0.5s] hover:scale-103 w-[630px]">
          <img src="/Image/map.png" className="w-[630px] h-[210px] object-cover rounded-[8px]" />
          <h1 className="text-[22px] font-serif font-extrabold pt-[50px] px-4">Based in Loughborough, Operating UK-Wide</h1>
          <p className="text-[14px] text-gray-600 font-normal pb-6 px-4">Local expertise with national reach wherever you're moving, we've got you covered.</p>
        </div>
        </div>
      </section>
      


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
    
  </main>
  )
}

export default HomeFK