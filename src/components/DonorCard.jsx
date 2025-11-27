"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function DonorCard({ donor }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(donor.phone);
    toast.success(" Phone number copied!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-red-100 p-6 hover:shadow-2xl transition-all duration-300">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={donor.photoURL}
          alt={donor.name}
          className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-red-200"
        />
      </div>

      {/* Name */}
      <h2 className="text-center text-xl font-bold text-gray-900 tracking-tight">
        {donor.name}
      </h2>

      {/* Blood Group */}
      <div className="flex justify-center my-3">
        <span className="px-4 py-1 text-white font-semibold bg-red-600 rounded-full shadow">
          {donor.bloodGroup}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-2 text-center text-gray-600 text-sm">
        <p>
          <strong>📞 Phone:</strong> {donor.phone}
        </p>
        <p>
          <strong>🏥 Last Donated:</strong> {donor.lastDonationDate}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="mt-5 w-full py-2 border-2 border-red-700 rounded-xl font-semibold text-black shadow hover:bg-red-700 hover:text-white transition"
        >
          Copy Number
        </button>

        {/* Navigate to dynamic details page */}
        <Link
          href={`/donors/${donor._id}`}
          className="mt-5 w-full py-2 bg-red-600 text-white rounded-xl font-semibold shadow hover:bg-red-700 transition text-center"
        >
          View Details
        </Link>
      </div>

      <ToastContainer />
    </div>
  );
}
