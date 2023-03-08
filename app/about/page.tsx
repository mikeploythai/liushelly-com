"use client";

import Hero from "@/components/general/Hero";
import aboutImg from "@/public/about-img.png";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

const AboutText = () => {
  return (
    <Text fontSize="sm">
      Hi, I&apos;m Shelly! I&apos;m a senior at California State University,
      Fullerton pursing a degree in Business Administration with a concentration
      in Marketing.
      <br></br>
      <br></br>I currently work as an Administrative and Marketing Assistant at
      Technology Therapy Group, a digital marketing firm. Additionally, I work
      as a freelance social media manager/strategist, with 3+ years of
      experience in social media management, digital marketing, and content
      marketing.
      <br></br>
      <br></br>
      I&apos;m super passionate about storytelling through digital marketing and
      helping women-owned, BIPOC-owned, and LGBTQ-owned businesses grow their
      online presence organically and save time on social media so that they can
      focus on their craft.
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
  );
};

const About = () => {
  return (
    <>
      <Hero img={aboutImg} imgHeight="sm">
        <Heading
          size={{ base: "lg", md: "xl" }}
          variant={{ base: "secondary", sm: "primary" }}
        >
          About me.
        </Heading>

        <Box display={{ base: "none", sm: "initial" }}>
          <AboutText />
        </Box>
      </Hero>

      <Box display={{ base: "initial", sm: "none" }} p={4}>
        <AboutText />
      </Box>
    </>
  );
};

export default About;
