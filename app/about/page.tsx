"use client";

import PhotoHero from "@/components/templates/PhotoHero";
import { PhotoHeroProps } from "@/lib/types/photoHeroProps";
import aboutImg from "@/public/about-img.png";
import { Heading, Link, Text } from "@chakra-ui/react";

const About = () => {
  const HeroProps: PhotoHeroProps = {
    container: { flexDir: { base: "column", md: "row" }, p: 4 },
    card: {
      cardBox: {
        w: { base: "full", md: "unset" },
        pr: 2,
        pb: { base: 2, sm: 0 },
      },
      cardContainer: { variant: "shadow" },
      cardBody: { w: { base: "full", md: "2xs" }, h: "sm" },
      cardImg: {
        src: aboutImg,
        alt: "Photo of Shelly Liu, Social Media Manager",
      },
    },
  };

  return (
    <PhotoHero props={HeroProps}>
      <Heading size={{ base: "lg", md: "xl" }}>About me!</Heading>

      <Text fontSize="sm">
        Hi, I&apos;m Shelly! I&apos;m a senior at California State University,
        Fullerton pursing a degree in Business Administration with a
        concentration in Marketing.
        <br></br>
        <br></br>I currently work as an Administrative and Marketing Assistant
        at Technology Therapy Group, a digital marketing firm. Additionally, I
        work as a freelance social media manager/strategist, with 3+ years of
        experience in social media management, digital marketing, and content
        marketing.
        <br></br>
        <br></br>
        I&apos;m super passionate about storytelling through digital marketing
        and helping women-owned, BIPOC-owned, and LGBTQ-owned businesses grow
        their online presence organically and save time on social media so that
        they can focus on their craft.
        <br></br>
        <br></br>
        Want to work with me?{" "}
        <Link
          href="https://calendly.com/shellyliu/30mindiscoverychat"
          referrerPolicy="strict-origin-when-cross-origin"
          fontWeight="semibold"
          isExternal
        >
          Click here to set up a chat!
        </Link>
      </Text>
    </PhotoHero>
  );
};

export default About;
