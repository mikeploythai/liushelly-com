"use client";

import PhotoHero from "@/components/common/PhotoHero";
import InstagramSamples from "@/components/pages/home/InstagramSamples";
import Marquee from "@/components/pages/home/Marquee";
import ServicesGrid from "@/components/pages/home/ServicesGrid";
import Testimonials from "@/components/pages/home/Testimonials";
import { PhotoHeroProps } from "@/lib/types/photoHeroProps";
import heroImg from "@/public/hero-img.png";
import { Button, Heading, Link, useBreakpointValue } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Home = () => {
  const cardVariant = useBreakpointValue({ base: "unset", sm: "shadow" });

  const HeroProps: PhotoHeroProps = {
    container: { flexDir: "row-reverse", p: { base: 0, sm: 4 } },
    card: {
      cardBox: {
        w: { base: "full", sm: "unset" },
        pr: { base: 0, sm: 2 },
        pb: { base: 0, sm: 2 },
      },
      cardContainer: { variant: cardVariant },
      cardBody: {
        w: { base: "full", sm: "3xs", md: "2xs" },
        h: { base: "lg", sm: "xs", md: "sm" },
      },
      cardImg: {
        src: heroImg,
        alt: "Photo of Shelly Liu, Social Media Manager",
      },
    },
    vStack: {
      pos: { base: "absolute", sm: "unset" },
      p: { base: 4, sm: 0 },
      spacing: 4,
    },
  };

  return (
    <>
      <PhotoHero props={HeroProps}>
        <Heading
          size={{ base: "lg", md: "xl" }}
          variant={{ base: "secondary", sm: "primary" }}
        >
          Let me help your business <u>FLOURISH</u> through organic social media
          growth.
        </Heading>

        <Button
          as={Link}
          href="https://calendly.com/shellyliu/30mindiscoverychat"
          referrerPolicy="strict-origin-when-cross-origin"
          size={{ base: "sm", sm: "md" }}
          variant={{ base: "secondary", sm: "primary" }}
          rightIcon={<FaAngleDoubleRight />}
          isExternal
        >
          Work with me
        </Button>
      </PhotoHero>

      <Marquee />
      <ServicesGrid />
      <Testimonials />
      <InstagramSamples />
    </>
  );
};

export default Home;
