"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto w-[95%] min-h-[80vh] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white rounded-2xl my-30 p-6 md:p-20 shadow-2xl">
      {/* Left side text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
          Donate <span className="text-red-600">Blood</span>, Save Lives
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl mx-auto md:mx-0">
          A small contribution from you can create a huge impact. Join Amar
          Rokto and help people in need across Bangladesh.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/donors"
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            Need Blood
          </Link>

          <Link
            href="/beadonor"
            className="bg-white text-red-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 flex items-center gap-2 transition"
          >
            Become a Donor <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/hero-bg-removebg-preview.png"
          alt="Donate Blood"
          className="w-[80%] sm:w-[60%] md:w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}
