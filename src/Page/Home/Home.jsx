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
} from "react-icons/fa";
import OurVets from "../../components/Sections/Our Vets/OurVets";
import WinterCare from "../../components/Sections/Winter Care/WinterCare";

const Home = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://el.commonsupport.com/newwp/carepress/wp-content/uploads/2020/09/slide-v1-2.jpg",
      subTitle: "Enjoy Your Holiday",
      title: "We Keep Them Happy Anytime.",
    },
    {
      id: 2,
      image:
        "https://el.commonsupport.com/newwp/carepress/wp-content/uploads/2020/09/slide-v1-3.jpg",
      subTitle: "Best Pet Care Service",
      title: "Your Pets Are In Good Hands.",
    },
    {
      id: 3,
      image:
        "https://el.commonsupport.com/newwp/carepress/wp-content/uploads/2020/09/slide-v1-1.jpg",
      subTitle: "Expert Veterinarians",
      title: "Care And Love For Your Pets.",
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
                  src="https://cdn-icons-png.flaticon.com/512/3047/3047928.png"
                  alt="Dog Training"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3a5e] mb-2 md:mb-3">
                  Dog Training
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  We provide a range of training programs, ranging from basic
                  and advanced obedience to training your new puppy.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col sm:flex-row gap-4 md:gap-6 items-start border-b-4 border-orange-400 transition-all duration-300 hover:bg-slate-50 md:border-l md:border-r border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                  alt="Pet Grooming"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3a5e] mb-2 md:mb-3">
                  Pet Grooming
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Our full-time groomer has experience with many breeds and can
                  make your pet smell and look its best.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col sm:flex-row gap-4 md:gap-6 items-start border-b-4 border-lime-500 transition-all duration-300 hover:bg-slate-50">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2809/2809706.png"
                  alt="Dog Care"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3a5e] mb-2 md:mb-3">
                  Dog Care
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  For your dog, we offer single-day packages, weekly packages,
                  and monthly packages available.
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
                    "url('https://el.commonsupport.com/newwp/carepress/wp-content/uploads/2020/09/feature-1.jpg')",
                }}
              ></div>

              <div className="bg-white shadow-2xl p-8 md:p-12 rounded-sm border-t-4 border-blue-900">
                <h3 className="text-3xl font-extrabold text-[#2d3a5e] mb-2">
                  Working Hours<span className="text-pink-500">.</span>
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Carepress start their activity from morning 08am to till night
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

            {/* ডান পাশ: Core Level Features */}
            <div className="w-full lg:w-7/12">
              <p className="text-pink-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-4">
                // Features //
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-[#2d3a5e] mb-6 leading-tight">
                Core Level Features<span className="text-pink-500">.</span>
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed max-w-2xl">
                At CarePress, we go to great extents to guarantee that your dog
                is in the best possible hands. We devote individual attention
                and sensitive loving care to all of our Campers as if they are
                really our own.
              </p>

              {/* ফিচার গ্রিড */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 border-t border-gray-100 pt-10">
                {/* Item 1 */}
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaPlusSquare />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      Pet Care
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Get a solid solution
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaSyringe />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      Pet Medicine
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Get a solid solution
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-5 group border-t border-gray-50 sm:border-t-0 pt-10 sm:pt-0">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaClipboardList />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      Grooming
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Get a solid solution
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-5 group border-t border-gray-50 sm:border-t-0 pt-10 sm:pt-0">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <FaMedkit />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2d3a5e]">
                      Monthly Care
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Get a solid solution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurVets />
      <WinterCare />

      {/* price  */}
      <section className="py-20 bg-[#F2F5F7]">
      <div className="container mx-auto px-6">
        
        
        <div className="text-center mb-16">
          <p className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-2">
            // Insight //
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-[#2d3a5e]">
            Price & Plan<span className="text-pink-500">.</span>
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          
          <div className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="bg-[#F7F7F7] p-10 pb-16 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2 text-[#2d3a5e]">Basic Day Care</h3>
              <p className="text-sm opacity-80 mb-4 text-[#2d3a5e]">Monthly</p>
              <div className="flex items-baseline text-[#2d3a5e]">
                <span className="text-3xl font-bold mr-2">$</span>
                <span className="text-5xl font-black">70</span>
                <span className="text-lg opacity-70 ml-1">/mo</span>
              </div>
            </div>
            <div className="bg-white px-10 py-10 -mt-10 rounded-t-[40px] relative z-10">
              <h4 className="text-[#2d3a5e] font-extrabold mb-6">Features</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Single room</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Socialist Exercise</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Custom Meals</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Excercise 2x</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Grooming 2x</li>
              </ul>
              <button className="bg-pink-500 w-full py-4 text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                Purchase Now
              </button>
            </div>
          </div>

          
          <div className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="bg-[#1e2746] p-10 pb-16 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2 text-white">Exclusive 2X Care</h3>
              <p className="text-sm opacity-80 mb-4 text-white">Monthly</p>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold mr-2">$</span>
                <span className="text-5xl font-black">199</span>
                <span className="text-lg opacity-70 ml-1">/mo</span>
              </div>
            </div>
            <div className="bg-white px-10 py-10 -mt-10 rounded-t-[40px] relative z-10">
              <h4 className="text-[#2d3a5e] font-extrabold mb-6">Features</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Single room</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Socialist Exercise</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Custom Meals</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Excercise 2x</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Grooming 2x</li>
              </ul>
              <button className="bg-pink-500 w-full py-4 text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                Purchase Now
              </button>
            </div>
          </div>

          
          <div className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="bg-pink-500 p-10 pb-16 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2 text-white">Platinum 4X Care</h3>
              <p className="text-sm opacity-80 mb-4 text-white">Monthly</p>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold mr-2">$</span>
                <span className="text-5xl font-black">299</span>
                <span className="text-lg opacity-70 ml-1">/mo</span>
              </div>
            </div>
            <div className="bg-white px-10 py-10 -mt-10 rounded-t-[40px] relative z-10">
              <h4 className="text-[#2d3a5e] font-extrabold mb-6">Features</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Single room</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Socialist Exercise</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Custom Meals</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Excercise 2x</li>
                <li className="flex items-center gap-3 font-medium text-gray-600">✓ Grooming 2x</li>
              </ul>
              <button className="bg-[#1e2746] w-full py-4 text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                Purchase Now
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
