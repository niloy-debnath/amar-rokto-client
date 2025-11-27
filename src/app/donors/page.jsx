"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import DonorCard from "@/components/DonorCard";

export default function Donors() {
  const itemsPerPage = 4;

  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const totalPages = Math.ceil(filteredDonors.length / itemsPerPage);

  const [swiperRef, setSwiperRef] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  // ============= FETCH donors from backend ============
  useEffect(() => {
    const getDonors = async () => {
      try {
        const res = await fetch("https://amar-rokto-server.vercel.app/donors");
        const data = await res.json();
        setDonors(data);
        setFilteredDonors(data);
        setLoading(false);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    getDonors();
  }, []);

  // ============= FILTER donors based on search input ============
  useEffect(() => {
    if (!search) {
      setFilteredDonors(donors);
    } else {
      const filtered = donors.filter(
        (d) =>
          d.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
          d.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredDonors(filtered);
    }
    setCurrentPage(1);
    if (swiperRef) swiperRef.slideTo(0);
  }, [search, donors, swiperRef]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-gray-600">
        Loading donors...
      </div>
    );
  }

  const goToPage = (page) => {
    const index = (page - 1) * itemsPerPage;
    swiperRef.slideTo(index);
    setCurrentPage(page);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-700">Our Donors</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Meet the generous donors who help save lives with their donations.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by name or blood group (e.g., John, A+)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* SHOW ALL MODE */}
        {showAll ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredDonors.map((donor) => (
                <DonorCard key={donor._id} donor={donor} />
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-3 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700 transition"
              >
                Show Less
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Swiper */}
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              onSlideChange={(swiper) => {
                const newPage =
                  Math.floor(swiper.activeIndex / itemsPerPage) + 1;
                setCurrentPage(newPage);
              }}
              modules={[Navigation]}
              className="pb-12"
            >
              {filteredDonors.map((donor) => (
                <SwiperSlide key={donor._id} className="flex justify-center">
                  <DonorCard donor={donor} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination buttons */}
            <div className="flex justify-center mt-6 flex-wrap gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 rounded-lg border w-20 text-center ${
                      currentPage === page
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-red-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* SHOW ALL */}
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700 transition"
              >
                Show All
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
