"use client";

import Cards from "@/components/shared/Cards";
import { PortfolioProps } from "@/lib/portfolioProps";
import sanity from "@/lib/sanityClient";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";

const logoFont = Unbounded({ subsets: ["latin"] });

const query = groq`
  *[_type == "portfolio"] | order(orderRank) {
    name,
    slug,
    img {
      asset -> {
        url,
        metadata
      }
    },
  }
`;

export default async function Portfolio() {
  const data: PortfolioProps[] = await sanity.fetch(query);

  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col max-w-screen-lg w-full items-start p-4 gap-4 md:items-center md:px-4 md:py-8 md:gap-8">
        <h1
          className={`${logoFont.className} text-lg font-semibold sm:text-2xl`}
        >
          My portfolio!
        </h1>

        <Cards data={data} />
      </div>
    </section>
  );
}
