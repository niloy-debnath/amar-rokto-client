"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DonorDetailsPage() {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:7000/donors/${id}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Donor not found");
        return res.json();
      })
      .then((data) => setDonor(data))
      .catch((err) => setError(err.message));
  }, [id]);

  return (
    <PrivateRoute>
      <section className="min-h-screen bg-gray-50 py-16 px-6">
        {error && (
          <div className="p-10 text-center text-xl text-red-500">{error}</div>
        )}

        {!donor && !error && (
          <div className="p-10 text-center text-xl">Loading...</div>
        )}

        {donor && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-red-100">
            <div className="flex justify-center mb-8">
              <img
                src={donor.photoURL}
                alt={donor.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-red-200"
              />
            </div>

            <h1 className="text-4xl font-bold text-center text-gray-900">
              {donor.name}
            </h1>

            <div className="flex justify-center my-4">
              <span className="px-6 py-2 bg-red-600 text-white rounded-full text-lg font-semibold">
                {donor.bloodGroup}
              </span>
            </div>

            <div className="mt-8 space-y-4 text-lg text-gray-700">
              <p>
                <strong>📅 Age:</strong> {donor.age}
              </p>
              <p>
                <strong>📌 Location:</strong> {donor.location}
              </p>
              <p>
                <strong>📞 Phone:</strong> {donor.phone}
              </p>
              <p>
                <strong>🏥 Last Donation:</strong> {donor.lastDonationDate}
              </p>

              {donor.email && (
                <p>
                  <strong>📧 Email:</strong> {donor.email}
                </p>
              )}
            </div>
          </div>
        )}
      </section>
    </PrivateRoute>
  );
}
