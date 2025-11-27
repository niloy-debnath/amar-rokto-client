// app/contact/page.jsx
"use client"; // because we'll use useState for the form

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with Firebase or API
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className=" min-h-screen text-gray-800">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-red-700 mb-4">
          Contact Amar Rokto
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Reach out to us for donations, queries, or collaboration. We are here
          to help!
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-10 grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
          <MapPin className="w-10 h-10 text-red-600" />
          <h3 className="text-xl font-bold text-red-700">Address</h3>
          <p className="text-gray-700">Dhaka, Bangladesh</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
          <Phone className="w-10 h-10 text-red-600" />
          <h3 className="text-xl font-bold text-red-700">Phone</h3>
          <p className="text-gray-700">+880 1234 567890</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
          <Mail className="w-10 h-10 text-red-600" />
          <h3 className="text-xl font-bold text-red-700">Email</h3>
          <p className="text-gray-700">info@amarrokto.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 lg:px-20 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0000000000!2d90.0000000000!3d23.8100000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf0000000000%3A0x0000000000000000!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v0000000000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          className="rounded-2xl shadow-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
