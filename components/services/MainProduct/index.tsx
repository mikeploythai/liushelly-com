import ServiceDetails from "@/components/common/ServiceCards/ServiceDetails";
import sanity from "@/lib/sanityClient";
import { ServicesProps } from "@/lib/servicesProps";
import { servicesQuery } from "@/lib/servicesQuery";
import { Unbounded } from "next/font/google";

const logoFont = Unbounded({ subsets: ["latin"] });

export default async function MainProduct() {
  const data: ServicesProps[] = await sanity.fetch(servicesQuery);

  return (
    <section className="flex flex-col gap-4 max-w-[640px] p-4 mr-2 mb-2 sm:gap-16 sm:px-4 sm:py-16">
      <h1
        className={`${logoFont.className} text-lg font-semibold sm:text-2xl sm:text-center`}
      >
        Take your brand&apos;s social media presence to the next level.
      </h1>

      <article className="flex flex-col gap-4 bg-brand-light p-4 border border-brand-dark shadow-normal shadow-brand-dark">
        <ServiceDetails data={data[0]} />
      </article>
    </section>
  );
}
