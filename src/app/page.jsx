import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import WhyDonate from "@/components/WhyDonate";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Testimonials></Testimonials>
      <WhyDonate></WhyDonate>
      <FAQ></FAQ>
    </div>
  );
}
