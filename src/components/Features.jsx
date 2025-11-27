"use client";

import { Heart, Users, PhoneCall, ShieldCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700">
          Why Choose Amar Rokto?
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Our platform connects donors and receivers fast, safely, and
          transparently across Bangladesh.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 hover:bg-red-600 hover:scale-105 cursor-pointer">
            <Heart
              className="mx-auto text-red-600 transition-all duration-300 group-hover:text-white"
              size={48}
            />
            <h3 className="mt-4 text-xl font-semibold group-hover:text-white">
              Save Lives
            </h3>
            <p className="mt-2 text-gray-600 transition group-hover:text-white">
              Your single donation can save someone life during emergencies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 hover:bg-red-600 hover:scale-105 cursor-pointer">
            <Users
              className="mx-auto text-red-600 transition-all duration-300 group-hover:text-white"
              size={48}
            />
            <h3 className="mt-4 text-xl font-semibold group-hover:text-white">
              Community Driven
            </h3>
            <p className="mt-2 text-gray-600 transition group-hover:text-white">
              Thousands of donors are ready to help people in need.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 hover:bg-red-600 hover:scale-105 cursor-pointer">
            <PhoneCall
              className="mx-auto text-red-600 transition-all duration-300 group-hover:text-white"
              size={48}
            />
            <h3 className="mt-4 text-xl font-semibold group-hover:text-white">
              Quick Response
            </h3>
            <p className="mt-2 text-gray-600 transition group-hover:text-white">
              Our platform ensures fast donor matching within minutes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 hover:bg-red-600 hover:scale-105 cursor-pointer">
            <ShieldCheck
              className="mx-auto text-red-600 transition-all duration-300 group-hover:text-white"
              size={48}
            />
            <h3 className="mt-4 text-xl font-semibold group-hover:text-white">
              Verified Donors
            </h3>
            <p className="mt-2 text-gray-600 transition group-hover:text-white">
              All donors are verified to ensure safety and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
