import React, { useEffect, useState } from "react";

const OurVets = () => {
  const [team, setTeam] = useState([]);

  
  useEffect(() => {
    fetch("/vets.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <section className="w-full">
      
      <div className="bg-[#1e2746] py-20 px-6 text-center">
        <p className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-4">
          // Our Team //
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Our VETS<span className="text-pink-500">.</span>
        </h2>
      </div>

      
      <div className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center group"
            >
              
              <div className="w-40 h-40 rounded-full border-4 border-dashed border-gray-200 p-2 mb-6 group-hover:border-pink-500 transition-colors duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <p className="text-pink-500 text-sm font-bold mb-1 uppercase tracking-tighter">
                Care Specialist
              </p>
              <h3 className="text-2xl font-black text-[#2d3a5e] mb-1">
                {member.name}
              </h3>
              <p className="text-gray-400 font-medium mb-6">
                {member.role}
              </p>

              
              <div className="flex gap-3">
                {[
                  { path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", color: "bg-blue-800" },
                  { path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z", color: "bg-sky-600" },
                  { path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z", color: "bg-sky-400" },
                  { path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z", color: "bg-pink-500" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:bg-black`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVets;