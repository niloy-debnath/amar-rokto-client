// src/pages/About.jsx
import React from "react";
import Image from "next/image";

import { Users, Heart, Globe2 } from "lucide-react";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold text-red-700 mb-6 leading-tight">
              About Amar Rokto
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Amar Rokto is a premium blood donation platform connecting donors
              with patients across Bangladesh. Our mission is to make blood
              donation seamless, verified, and life-saving.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              We empower communities, hospitals, and organizations to work
              together in a trusted network, saving lives with efficiency and
              care.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/why-donate-bg.avif"
                alt="Blood donation"
                width={600}
                height={400}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid md:grid-cols-3 gap-10">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start gap-6 hover:scale-105 transition-transform duration-300">
          <Heart className="w-12 h-12 text-red-600" />
          <h3 className="text-2xl font-bold text-red-700">Our Mission</h3>
          <p className="text-gray-700">
            To save lives by creating a trusted, efficient blood donation
            network, connecting verified donors with patients in real time
            across Bangladesh.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start gap-6 hover:scale-105 transition-transform duration-300">
          <Globe2 className="w-12 h-12 text-red-600" />
          <h3 className="text-2xl font-bold text-red-700">Our Vision</h3>
          <p className="text-gray-700">
            A Bangladesh where no one suffers due to lack of blood — fostering a
            compassionate, proactive community empowered to save lives.
          </p>
        </div>

        {/* Community Impact Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start gap-6 hover:scale-105 transition-transform duration-300">
          <Users className="w-12 h-12 text-red-600" />
          <h3 className="text-2xl font-bold text-red-700">Community Impact</h3>
          <p className="text-gray-700">
            Building a reliable ecosystem with thousands of donors, hundreds of
            hospitals, and countless lives touched, ensuring every drop of blood
            counts.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-700 text-white max-w-5xl rounded-2xl mx-auto w-[90%] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-5xl font-extrabold">5000+</h4>
            <p className="text-lg mt-2">Verified Donors</p>
          </div>
          <div>
            <h4 className="text-5xl font-extrabold">1200+</h4>
            <p className="text-lg mt-2">Lives Saved</p>
          </div>
          <div>
            <h4 className="text-5xl font-extrabold">150+</h4>
            <p className="text-lg mt-2">Hospitals Connected</p>
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white max-w-7xl w-[90%] mx-auto my-20 py-20 text-center rounded-b-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join Amar Rokto Today
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Become a donor, save lives, and help build a stronger Bangladesh.
        </p>
        <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
