"use client";

import { useState } from "react";
import faqData from "@/data/faq";

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);

  const visibleFaq = showAll ? faqData : faqData.slice(0, 4);

  return (
    <section className="py-16 ">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {visibleFaq.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-6">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Show More FAQ
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left"
      >
        <span className="font-medium">{faq.question}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>}
    </div>
  );
}
