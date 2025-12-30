import React, { useEffect, useState } from "react";

const WinterCare = () => {
  const [tips, setTips] = useState([]);

  
  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Error fetching tips:", err));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
       
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <p className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-3">
              // Care Guide //
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#2d3a5e] leading-tight">
              Winter Care Tips for Pets<span className="text-pink-500">.</span>
            </h2>
          </div>
          <button className="hidden md:block px-8 py-4 bg-[#2d3a5e] text-white font-bold rounded-full hover:bg-pink-500 transition-all duration-300 shadow-lg">
            View All Insights
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group"
            >
              
              <div className={`w-20 h-20 ${tip.bgColor} rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500`}>
                <svg 
                  className={`w-10 h-10 ${tip.colorClass}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5"
                >
                  <path d={tip.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-extrabold text-[#2d3a5e] mb-5 group-hover:text-pink-500 transition-colors">
                {tip.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg mb-8">
                {tip.description}
              </p>
              
              <div className="flex items-center text-pink-500 font-black cursor-pointer text-sm uppercase tracking-tighter">
                Explore More 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        
        <div className="md:hidden mt-12 text-center">
          <button className="w-full py-4 bg-[#2d3a5e] text-white font-bold rounded-full">
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default WinterCare;