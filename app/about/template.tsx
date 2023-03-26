"use client";

import PhotoHero from "@/components/common/PhotoHero";
import { PhotoHeroProps } from "@/lib/types/photoHeroProps";
import aboutImg from "@/public/about-img.png";

const AboutTemplate = ({ children }: { children: React.ReactNode }) => {
  const HeroProps: PhotoHeroProps = {
    container: {
      flexDir: { base: "column", md: "row" },
      p: 4,
    },
    card: {
      box: {
        w: { base: "full", md: "unset" },
        pr: 2,
        pb: { base: 2, sm: 0 },
      },
      container: { variant: "shadow" },
      body: {
        w: { base: "full", md: "2xs" },
        h: "sm",
      },
      image: {
        src: aboutImg,
        alt: "Photo of Shelly Liu, Social Media Manager",
      },
    },
  };

  return <PhotoHero props={HeroProps}>{children}</PhotoHero>;
};

export default AboutTemplate;
