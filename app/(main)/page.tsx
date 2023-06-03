import PreviewSuspense, { Loading } from "@/components/shared/PreviewSuspense";
import fetchHomeQueries from "@/lib/fetchHomeData";
import { draftMode } from "next/headers";
import Hero from "./_components/Hero";
import InstagramSamples from "./_components/InstagramSamples";
import Marquee from "./_components/Marquee";
import PreviewHome from "./_components/PreviewHome";
import ServiceSamples from "./_components/ServiceSamples";
import Testimonials from "./_components/Testimonials";

export const revalidate = 60;

export default async function Home() {
  const { hero, marquee, service, testimonial, instagram } =
    await fetchHomeQueries();

  if (draftMode().isEnabled)
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewHome />
      </PreviewSuspense>
    );

  return (
    <>
      <Hero data={hero} />
      <Marquee data={marquee} />
      <ServiceSamples data={service} />
      <Testimonials data={testimonial} />
      <InstagramSamples data={instagram} />
    </>
  );
}
