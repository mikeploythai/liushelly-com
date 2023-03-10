"use client";

import Hero from "@/components/general/Hero";
import InstagramSamples from "@/components/home/InstagramSamples";
import Marquee from "@/components/home/Marquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import heroImg from "@/public/hero-img.png";
import { Button, Heading, Link } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Hero img={heroImg}>
        <Heading
          size={{ base: "lg", md: "xl" }}
          variant={{ base: "secondary", sm: "primary" }}
        >
          Let me help your business <u>FLOURISH</u> through organic social media
          growth.
        </Heading>

        <Button
          as={Link}
          size={{ base: "sm", sm: "md" }}
          variant={{ base: "secondary", sm: "primary" }}
          rightIcon={<FaAngleDoubleRight />}
          href="https://calendly.com/shellyliu/30mindiscoverychat"
          referrerPolicy="strict-origin-when-cross-origin"
          isExternal
        >
          Work with me
        </Button>
      </Hero>

      <Marquee />
      <ServicesGrid />
      <Testimonials />
      <InstagramSamples />
    </>
  );
};

export default Home;
