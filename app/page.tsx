"use client";

import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
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
          aria-label="Book a discovery call with me!"
          href="https://calendly.com/shellyliu/30mindiscoverychat"
          referrerPolicy="strict-origin-when-cross-origin"
          isExternal
        >
          Book a call
        </Button>
      </Hero>

      <Marquee />
    </>
  );
};

export default Home;
