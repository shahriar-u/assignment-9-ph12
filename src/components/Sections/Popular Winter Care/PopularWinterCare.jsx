import React, { useEffect, useState } from "react";

const PopularWinterCare = () => {
  const [services, setServices] = useState([]);

  
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        

        <div className="text-center mb-16">
          <p className="text-pink-500 font-bold uppercase tracking-widest text-sm">// Our Services //</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3a5e] mt-2">Popular Skills</h2>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >

              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.serviceName} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="font-bold text-gray-800 text-sm">{service.rating}</span>
                </div>
              </div>


              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#2d3a5e] mb-3 group-hover:text-pink-500 transition-colors">
                  {service.serviceName}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <div>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-tighter">Price Starts From</p>
                    <p className="text-3xl font-black text-lime-500">${service.price}</p>
                  </div>
                  <button className="btn bg-[#2d3a5e] hover:bg-pink-500 text-white border-none rounded-2xl px-6 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularWinterCare;