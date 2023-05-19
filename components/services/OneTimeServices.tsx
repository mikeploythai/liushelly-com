import sanity from "@/lib/sanityClient";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import ServiceCards from "../common/ServiceCards";
import { ServicesProps } from "@/lib/serviceProps";

const logoFont = Unbounded({ subsets: ["latin"] });

const query = groq`
  *[_type == "services"] | order(orderRank) {
    name,
    description,
    cta,
    img {
      asset -> {
        url,
        metadata
      }
    },
    inclusions
  }
`;

export default async function OneTimeServices() {
  const data: ServicesProps[] = await sanity.fetch(query);

  return (
    <section className="flex w-full justify-center bg-brand-dark">
      <div className="flex flex-col max-w-screen-lg w-full items-center p-4 gap-4 md:px-4 md:py-8 md:gap-8">
        <hgroup className="flex flex-col max-w-screen-md gap-2 md:items-center">
          <h2
            className={`${logoFont.className} text-base font-semibold text-brand-light sm:text-lg`}
          >
            Not ready for social media management?
          </h2>

          <p className="text-sm text-brand-light md:text-center">
            My one-time services are the perfect solution! Whether you need an
            expert opinion or just a little guidance, I&apos;m here to help you
            make the best decisions for your business without the long-term
            commitment.
          </p>
        </hgroup>

        <ServiceCards data={data} />
      </div>
    </section>
  );
}
