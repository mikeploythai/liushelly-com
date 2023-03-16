"use client";

import Hero from "@/components/home/Hero";
import InstagramSamples from "@/components/home/InstagramSamples";
import Marquee from "@/components/home/Marquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <Testimonials />
      <InstagramSamples />
    </>
  );
};

export default Home;
