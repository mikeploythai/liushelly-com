"use client";

import PhotoCardLayout from "@/components/common/PhotoCardLayout";
import InstagramPreview from "@/components/home/InstagramPreview";
import ScrollingText from "@/components/home/ScrollingText";
import ServicePreview from "@/components/home/ServicePreview";
import Testimonials from "@/components/home/Testimonials";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "photoCard" && title == "Home Page"][0] {
    title,
    heading,
    img {
      asset -> {
        url,
        metadata
      }
    },
    cta
  }
`;

export default async function Home() {
  const photoCardLayout: JSX.Element = await PhotoCardLayout({ query });
  const scrollingText: JSX.Element = await ScrollingText();
  const servicePreview: JSX.Element = await ServicePreview();
  const testimonials: JSX.Element = await Testimonials();
  const igPreview: JSX.Element = await InstagramPreview();

  return (
    <>
      {photoCardLayout}
      {scrollingText}
      {servicePreview}
      {testimonials}
      {igPreview}
    </>
  );
}
