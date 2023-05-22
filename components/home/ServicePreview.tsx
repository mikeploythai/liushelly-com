import sanity from "@/lib/sanityClient";
import { ServicesProps } from "@/lib/servicesProps";
import { servicesQuery } from "@/lib/servicesQuery";
import { Unbounded } from "next/font/google";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import ServiceCards from "../common/ServiceCards";

const logoFont = Unbounded({ subsets: ["latin"] });

export default async function ServicePreview() {
  const data: ServicesProps[] = await sanity.fetch(servicesQuery);

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
        className="flex w-full justify-center items-center gap-2 p-2.5 text-xs text-brand-light font-medium uppercase bg-brand-dark transition ease-in-out hover:bg-brand-dark/90 active:bg-brand-dark/80"
      >
        Explore all services
        <FaAngleDoubleRight />
      </Link>
    </section>
  );
}
