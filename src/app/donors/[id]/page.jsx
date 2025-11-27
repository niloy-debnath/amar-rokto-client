"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DonorDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [donor, setDonor] = useState(null);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!id) return;

    fetch(`https://amar-rokto-server.vercel.app/donors/${id}`, {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Donor not found");
        return res.json();
      })
      .then((data) => {
        setDonor(data);
        setFormData({
          name: data.name,
          age: data.age,
          location: data.location,
          phone: data.phone,
          bloodGroup: data.bloodGroup,
          lastDonationDate: data.lastDonationDate,
          email: data.email || "",
        });
      })
      .catch((err) => setError(err.message));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `https://amar-rokto-server.vercel.app/donors/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Update failed");

      const updated = await res.json();
      setDonor(updated);
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    }
  };

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
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-red-100 relative">
            {/* Back & Edit buttons */}
            <div className="flex justify-between mb-6">
              <button
                onClick={() => router.push("/donors")}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                ← Back
              </button>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src={donor.photoURL}
                alt={donor.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-red-200"
              />
            </div>

            <div className="text-center">
              {isEditing ? (
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    placeholder="Blood Group"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="lastDonationDate"
                    value={formData.lastDonationDate}
                    onChange={handleChange}
                    placeholder="Last Donation Date"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                  />

                  <button
                    onClick={handleUpdate}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-4xl font-bold text-gray-900">
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
                      <strong>🏥 Last Donation:</strong>{" "}
                      {donor.lastDonationDate}
                    </p>
                    {donor.email && (
                      <p>
                        <strong>📧 Email:</strong> {donor.email}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </PrivateRoute>
  );
}
