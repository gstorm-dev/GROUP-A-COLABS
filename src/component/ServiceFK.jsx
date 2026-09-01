import React from 'react'
import Service from '../page/service'
import Footer from './Footer'
import Hero from './Hero'
import Adam from '../assets/adam.jpg'

import Move from "../assets/Move.jpg";
import Relocate from "../assets/Relocate.jpg";
import Four from "../assets/Four.jpg";
import Fifth from "../assets/Fifth.jpg";
import Sixth from "../assets/Sixth.jpg";

const ServiceFK = () => {
  return (
    <div>

      <Hero />

       


      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What We Offer
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide reliable and professional services designed to make
              waste removal simple, clean, and stress-free.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={Adam}
                alt="Residential Waste Removal"
                className="w-full h-48 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Residential Waste Removal
                </h3>

                <p className="text-gray-600">
                  Convenient waste removal services that help keep homes
                  clean, safe, and comfortable.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={Move}
                alt="Commercial Waste Removal"
                className="w-full h-48 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Commercial Waste Removal
                </h3>

                <p className="text-gray-600">
                  Reliable waste collection solutions for offices,
                  businesses, and commercial spaces.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={Relocate}
                alt="Bulk Waste Removal"
                className="w-full h-48 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Bulk Waste Removal
                </h3>

                <p className="text-gray-600">
                  Efficient removal of large amounts of unwanted items
                  and waste from your property.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={Four}
                alt="Construction Waste Removal"
                className="w-full h-48 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Construction Waste Removal
                </h3>

                <p className="text-gray-600">
                  Fast and efficient removal of construction debris and
                  unwanted materials from your property.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={Fifth}
                alt="Yard Waste Removal"
                className="w-full h-48 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Yard Waste Removal
                </h3>

                <p className="text-gray-600">
                  Keep your outdoor spaces clean with convenient removal
                  of garden waste, branches, and other outdoor debris.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={Sixth}
                alt="Furniture Removal"
                className="w-full h-48 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Furniture Removal
                </h3>

                <p className="text-gray-600">
                  Easy removal of unwanted furniture and bulky household
                  items, leaving your space clean and clutter-free.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};



export default ServiceFK