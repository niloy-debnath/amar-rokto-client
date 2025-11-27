"use client";

import testimonials from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700">
          What People Say
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Hear from real donors and receivers who have benefited from Amar
          Rokto.
        </p>
      </div>

      <div className="mt-12">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 1.2 }, // Larger phones
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Desktop
          }}
          className="mySwiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md w-72 sm:w-80 md:w-96 flex flex-col items-center text-center border border-red-100 transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={t.photoURL}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />

              <p className="mt-4 text-gray-700 italic leading-relaxed">
                “{t.testimony}”
              </p>

              <h3 className="mt-4 font-semibold text-red-700 text-lg">
                {t.name}
              </h3>
              <p className="text-gray-500 text-sm">{t.location}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
