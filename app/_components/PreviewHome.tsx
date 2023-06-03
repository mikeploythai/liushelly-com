"use client";

import {
  heroQuery,
  instagramQuery,
  marqueeQuery,
  testimonialQuery,
} from "@/lib/queries/homeQueries";
import { usePreview } from "@/lib/sanity/preview";
import Hero from "./Hero";
import InstagramSamples from "./InstagramSamples";
import Marquee from "./Marquee";
import ServiceSamples from "./ServiceSamples";
import Testimonials from "./Testimonials";
import serviceQuery from "@/lib/queries/servicesQuery";

export default function PreviewHome() {
  const homeSections = [
    { data: usePreview(null, heroQuery), Component: Hero },
    { data: usePreview(null, marqueeQuery), Component: Marquee },
    { data: usePreview(null, serviceQuery), Component: ServiceSamples },
    { data: usePreview(null, testimonialQuery), Component: Testimonials },
    { data: usePreview(null, instagramQuery), Component: InstagramSamples },
  ];

  return (
    <>
      {homeSections.map(({ data, Component }, index) => (
        <Component key={index} data={data} />
      ))}
    </>
  );
}
