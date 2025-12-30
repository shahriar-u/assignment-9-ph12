import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Services = () => {
  const [serviceData, setserviceData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setserviceData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Service Booked Successfully!", {
        style: {
          borderRadius: "15px",
          background: "#2d3a5e",
          color: "#fff",
        },
      });
      e.target.reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F2F5F7] py-10 md:py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
       
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-[35px] shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300"
              >
           
                <div className="h-48 w-full relative">
                  <img 
                    src={service.image} 
                    alt={service.serviceName} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <p className="text-xs font-black text-pink-500">★ {service.rating}</p>
                  </div>
                </div>

        
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h2 className="text-xl font-black text-[#2d3a5e] leading-tight truncate">
                      {service.serviceName}
                    </h2>
                    <span className="text-[10px] bg-pink-50 text-pink-500 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                      {service.category || "General"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-50">
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Price</p>
                      <p className="text-sm font-black text-[#2d3a5e]">${service.price}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-50">
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Duration</p>
                      <p className="text-sm font-black text-[#2d3a5e]">{service.duration || "1 Hour"}</p>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-dashed border-gray-100 pt-4">
                    <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

 
        <div className="lg:col-span-1 order-1 lg:order-2">
          <div className="bg-white rounded-[35px] shadow-2xl p-6 md:p-8 border border-gray-100 sticky top-10 lg:top-24">
            <div className="text-center mb-6 md:mb-8">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#2d3a5e]">
                Quick Booking<span className="text-pink-500">.</span>
              </h3>
              <p className="text-gray-400 text-[10px] md:text-xs font-medium">Select a service and fill details</p>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#2d3a5e] ml-2 uppercase opacity-70">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#2d3a5e] ml-2 uppercase opacity-70">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@mail.com"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2d3a5e] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-pink-500 transition-all duration-300 shadow-lg active:scale-95 disabled:opacity-70 text-xs mt-2"
              >
                {loading ? "Processing..." : "Confirm Now"}
              </button>
            </form>

             
          </div>
        </div>

      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Services;