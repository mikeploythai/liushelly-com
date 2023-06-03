"use client";

import ScrollingText from "@/app/(components)/ScrollingText";
import { groq } from "next-sanity";
import InstagramPreview from "./(components)/InstagramPreview";
import ServicePreview from "./(components)/ServicePreview";
import Testimonials from "./(components)/Testimonials";
import PhotoCardLayout from "@/components/layouts/PhotoCardLayout";

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
