import sanity from "@/lib/sanityClient";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import ServiceCards, { ServicesProps } from "../common/ServiceCards";

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
  }
`;

export default async function ServicePreview() {
  const data: ServicesProps[] = await sanity.fetch(query);

  return (
    <section className="flex flex-col max-w-screen-lg w-full items-center p-4 gap-4">
      <h2
        className={`${logoFont.className} text-base font-semibold sm:text-lg`}
      >
        Personalized services to skyrocket your socials.
      </h2>

      <ServiceCards data={data} />

      <Link
        href="/services"
        className="flex w-full justify-center items-center gap-2 p-2.5 text-xs text-brand-light font-medium uppercase bg-brand-dark transition ease-in-out hover:bg-brand-dark/90 active:bg-brand-dark/80 dark:bg-brand-light dark:text-brand-dark dark:hover:bg-brand-light/90 dark:active:bg-brand-light/80"
      >
        Explore all services
        <FaAngleDoubleRight />
      </Link>
    </section>
  );
}
