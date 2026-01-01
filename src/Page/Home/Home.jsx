import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import PopularWinterCare from "../../components/Sections/Popular Winter Care/PopularWinterCare";
import {
  FaPlusSquare,
  FaSyringe,
  FaClipboardList,
  FaMedkit,
  FaMusic,
  FaTools,
  FaGuitar,
  FaGraduationCap,
} from "react-icons/fa";
import OurVets from "../../components/Sections/Our Vets/OurVets";
import WinterCare from "../../components/Sections/Winter Care/WinterCare";
import HowItWorks from "../../components/Sections/Winter Care/WinterCare";

const Home = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1920",
      subTitle: "Master Your Skills",
      title: "Unleash Your Inner Rock Star.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=1920",
      subTitle: "Premium Guitar Collection",
      title: "Quality Strings For Quality Sound.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1525201548942-d8b8967d0a57?q=80&w=1920",
      subTitle: "Expert Luthier Service",
      title: "Restore Your Guitar To Perfection.",
    },
  ];
  return (
    <div className="w-full">
      <section className="h-[70vh] md:h-screen w-full overflow-hidden relative">
        <Swiper
          effect={"fade"}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="mySwiper h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center">
                <div
                  className="absolute inset-0 bg-cover bg-center animate-slowZoom"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30 md:bg-black/10"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
                  <div className="max-w-3xl">
                    <p className="text-pink-500 font-bold uppercase tracking-[0.2em] text-sm md:text-lg animate-fadeInUp">
                      // {slide.subTitle} //
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mt-3 mb-6 md:mb-10 leading-[1.2] animate-fadeInUp [animation-delay:0.3s]">
                      {slide.title.split(" ").slice(0, 3).join(" ")} <br />
                      <span className="text-white md:text-blue-900 drop-shadow-md">
                        {slide.title.split(" ").slice(3).join(" ")}
                      </span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp [animation-delay:0.6s]">
                      <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600 px-6 md:px-10 rounded-full transition-all duration-300">
                        Make Appointment
                      </button>
                      <button className="btn bg-lime-500 border-none text-white hover:bg-lime-600 px-6 md:px-10 rounded-full transition-all duration-300">
                        987-876-876-87
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="relative z-50">
        <section className="mt-10 md:-mt-20 pb-10 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-sm overflow-hidden bg-white">
            
            <div className="p-6 md:p-10 flex flex-col sm:flex-row gap-4 md:gap-6 items-start border-b-4 border-pink-500 transition-all duration-300 hover:bg-slate-50">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3076/3076865.png"
                  alt="Guitar Lessons"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3a5e] mb-2 md:mb-3">
                  Guitar Lessons
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  We provide a range of music programs, from basic chords and
                  music theory to advanced lead guitar techniques.
                </p>
              </div>
            </div>

            
            <div className="p-6 md:p-10 flex flex-col sm:flex-row gap-4 md:gap-6 items-start border-b-4 border-orange-400 transition-all duration-300 hover:bg-slate-50 md:border-l md:border-r border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2888/2888562.png"
                  alt="Guitar Repair"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3a5e] mb-2 md:mb-3">
                  Setup & Repair
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Our expert luthier has years of experience with acoustic and
                  electric guitars to make them play and sound their best.
                </p>
              </div>
            </div>

            
            <div className="p-6 md:p-10 flex flex-col sm:flex-row gap-4 md:gap-6 items-start border-b-4 border-lime-500 transition-all duration-300 hover:bg-slate-50">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/860/860312.png"
                  alt="Guitar Rental"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3a5e] mb-2 md:mb-3">
                  Gear Rental
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  For your performances, we offer daily rental packages,
                  recording session kits, and monthly gear leases.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <PopularWinterCare />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-5/12 relative group">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg scale-105 -z-10 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1516924912137-9299e1199320?q=80&w=1000')", 
                }}
              ></div>

              <div className="bg-white shadow-2xl p-8 md:p-12 rounded-sm border-t-4 border-blue-900">
                <h3 className="text-3xl font-extrabold text-[#2d3a5e] mb-2">
                  Working Hours<span className="text-pink-500">.</span>
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  GuitarHub start their activity from morning 08am to till night
                  10pm.
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="font-bold text-[#2d3a5e]">Monday</span>
                    <span className="text-lime-500 font-bold">08AM - 10PM</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="font-bold text-[#2d3a5e]">Tuesday</span>
                    <span className="text-lime-500 font-bold">08AM - 10PM</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="font-bold text-[#2d3a5e]">Wednesday</span>
                    <span className="text-lime-500 font-bold">08AM - 10PM</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="font-bold text-[#2d3a5e]">Thursday</span>
                    <span className="text-lime-500 font-bold">08AM - 10PM</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="font-bold text-[#2d3a5e]">Friday</span>
                    <span className="text-lime-500 font-bold">08AM - 10PM</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="font-bold text-[#2d3a5e]">Saturday</span>
                    <span className="text-lime-500 font-bold">08AM - 10PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-[#2d3a5e]">Sunday</span>
                    <span className="text-pink-500 font-bold uppercase">
                      Holiday
                    </span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="w-full lg:w-7/12">
              <p className="text-pink-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-4">
                // Why Choose Us //
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-[#2d3a5e] mb-6 leading-tight">
                Premium Guitar Services<span className="text-pink-500">.</span>
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed max-w-2xl">
                At GuitarHub, we go to great lengths to ensure that your
                instrument is in the best possible hands. We provide
                professional tuning, precision repairs, and expert guidance to
                help you find your perfect sound.
              </p>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 border-t border-gray-100 pt-10">
                
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaMusic />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      Expert Tuning
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Perfect pitch every time
                    </p>
                  </div>
                </div>

                
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaTools />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      Professional Repair
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Luthier-grade fixings
                    </p>
                  </div>
                </div>

                
                <div className="flex items-center gap-5 group border-t border-gray-50 sm:border-t-0 pt-10 sm:pt-0">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaGuitar />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      New Accessories
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Top quality strings & gear
                    </p>
                  </div>
                </div>

                
                <div className="flex items-center gap-5 group border-t border-gray-50 sm:border-t-0 pt-10 sm:pt-0">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      Guitar Lessons
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Learn from the masters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurVets />
      <HowItWorks />

      

      <section className="py-20 bg-[#F2F5F7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-2">
              // Pricing //
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-[#2d3a5e]">
              Price & Plan<span className="text-pink-500">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="bg-[#F7F7F7] p-10 pb-16 transition-all duration-500">
                <h3 className="text-xl font-bold mb-2 text-[#2d3a5e]">
                  Basic Tuning
                </h3>
                <p className="text-sm opacity-80 mb-4 text-[#2d3a5e]">
                  Per Session
                </p>
                <div className="flex items-baseline text-[#2d3a5e]">
                  <span className="text-3xl font-bold mr-2">$</span>
                  <span className="text-5xl font-black">25</span>
                  <span className="text-lg opacity-70 ml-1">/set</span>
                </div>
              </div>
              <div className="bg-white px-10 py-10 -mt-10 rounded-t-[40px] relative z-10">
                <h4 className="text-[#2d3a5e] font-extrabold mb-6">Features</h4>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Professional Tuning
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Fretboard Cleaning
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ String Inspection
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Body Polishing
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Soft Gig Bag Check
                  </li>
                </ul>
                <button className="bg-pink-500 w-full py-4 text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="bg-[#1e2746] p-10 pb-16 transition-all duration-500">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Pro Maintenance
                </h3>
                <p className="text-sm opacity-80 mb-4 text-white">
                  Best for Musicians
                </p>
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-bold mr-2">$</span>
                  <span className="text-5xl font-black">89</span>
                  <span className="text-lg opacity-70 ml-1">/mo</span>
                </div>
              </div>
              <div className="bg-white px-10 py-10 -mt-10 rounded-t-[40px] relative z-10">
                <h4 className="text-[#2d3a5e] font-extrabold mb-6">Features</h4>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Advanced Setup (Action/Intonation)
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Premium String Replacement
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Electronics Diagnostics
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Deep Fret Polishing
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Truss Rod Adjustment
                  </li>
                </ul>
                <button className="bg-pink-500 w-full py-4 text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                  Choose Pro
                </button>
              </div>
            </div>

            
            <div className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="bg-pink-500 p-10 pb-16 transition-all duration-500">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Ultimate Luthier
                </h3>
                <p className="text-sm opacity-80 mb-4 text-white">
                  Full Restoration
                </p>
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-bold mr-2">$</span>
                  <span className="text-5xl font-black">199</span>
                  <span className="text-lg opacity-70 ml-1">/service</span>
                </div>
              </div>
              <div className="bg-white px-10 py-10 -mt-10 rounded-t-[40px] relative z-10">
                <h4 className="text-[#2d3a5e] font-extrabold mb-6">Features</h4>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Complete Fret Leveling
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Nut & Bridge Customization
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Full Pickup Shielding
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ Structural Wood Repair
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-600">
                    ✓ 24/7 Priority Support
                  </li>
                </ul>
                <button className="bg-[#1e2746] w-full py-4 text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                  Book Specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
