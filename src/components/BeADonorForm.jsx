"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function BeADonorForm() {
  const [user] = useAuthState(auth);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    age: "",
    bloodGroup: "",
    location: "",
    phone: "",
    lastDonationDate: "",
    photoURL: user?.photoURL || "",
    email: user?.email || "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.age ||
      !formData.location ||
      !formData.phone
    ) {
      setMessage("Please fill all required fields.");
      return;
    }
    if (!formData.bloodGroup) {
      setMessage("Please select a valid blood group.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:7000/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Donor added successfully!");
        setFormData({
          name: user?.displayName || "",
          age: "",
          bloodGroup: "",
          location: "",
          phone: "",
          lastDonationDate: "",
          photoURL: user?.photoURL || "",
          email: user?.email || "",
        });
      } else {
        setMessage("Failed to add donor.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to add donor. Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-30 text-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-700">Be a Donor</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Be a one of us and donate red love
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-4 bg-white p-8 shadow-2xl rounded-3xl"
      >
        {message && (
          <p
            className={`p-3 rounded text-center ${
              message.includes("successfully")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </p>
        )}

        <input
          className="input"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          className="input"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <input
          className="input"
          name="location"
          placeholder="Location (City, Country)"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          type="date"
          name="lastDonationDate"
          value={formData.lastDonationDate}
          onChange={handleChange}
        />

        <input
          className="input"
          name="photoURL"
          type="url"
          placeholder="Photo URL"
          value={formData.photoURL}
          onChange={handleChange}
        />

        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          readOnly
        />

        <button
          type="submit"
          className="btn bg-red-600 text-white w-full py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
