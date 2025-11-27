"use client";

import { HeartPulse, HandHeart, Ambulance, HelpingHand } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function WhyDonate() {
  const whyDonateData = [
    {
      id: 1,
      title: "Saves Lives Instantly",
      description:
        "Your donation can save accident victims, mothers in labor, and patients in critical condition.",
      icon: "HeartPulse",
    },
    {
      id: 2,
      title: "Helps Cancer Patients",
      description:
        "Cancer and chemotherapy patients depend on donated blood every day for essential treatment.",
      icon: "HandHeart",
    },
    {
      id: 3,
      title: "Emergency Support",
      description:
        "During accidents, surgeries, and natural disasters, immediate blood availability saves lives.",
      icon: "Ambulance",
    },
    {
      id: 4,
      title: "Supports Long-Term Illness Care",
      description:
        "People with chronic diseases such as thalassemia require regular blood transfusions.",
      icon: "HelpingHand",
    },
  ];

  const IconMap = {
    HeartPulse,
    HandHeart,
    Ambulance,
    HelpingHand,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-6 max-w-7xl mx-auto rounded-2xl">
        <div className="px-6 md:px-14 py-16">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Why Donating <span className="text-red-600">Blood</span> Matters
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-gray-600">
              Every drop you donate can save a life — and bring hope to families
              in need.
            </p>
          </div>

          {/* Swiper Coverflow */}
          <div className="mt-10">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="pb-10"
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {whyDonateData.map((data) => {
                const Icon = IconMap[data.icon];
                return (
                  <SwiperSlide key={data.id}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto text-center relative">
                      <Icon size={60} className="mx-auto text-red-600" />
                      <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                        {data.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{data.description}</p>

                      {/* Optional decorative background */}
                      <img
                        src="/blood-drop.png"
                        alt=""
                        className="absolute -right-10 -top-14 w-40 opacity-60 pointer-events-none"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
