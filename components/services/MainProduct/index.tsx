import { ServicesProps } from "@/components/common/ServiceCards";
import sanity from "@/lib/sanityClient";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import Inclusions from "./Inclusions";

const logoFont = Unbounded({ subsets: ["latin"] });

const query = groq`
  *[_type == "services"] | order(orderRank)[0] {
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

export default async function MainProduct() {
  const data: ServicesProps = await sanity.fetch(query);

  const descriptionComponent: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="text-sm">{children}</p>,
    },
  };

  return (
    <section className="flex flex-col gap-4 max-w-[640px] p-4 mr-2 mb-2 sm:gap-16 sm:px-4 sm:py-16">
      <h1
        className={`${logoFont.className} text-lg font-semibold sm:text-2xl sm:text-center`}
      >
        Take your brand&apos;s social media presence to the next level.
      </h1>

      <article className="flex flex-col gap-4 bg-brand-light p-4 border border-brand-dark shadow-normal shadow-brand-dark dark:border-brand-light  dark:bg-brand-dark dark:shadow-brand-light">
        <figure className="relative h-56 border border-brand-dark dark:border-brand-light">
          <Image
            src={data?.img.asset.url}
            alt=""
            placeholder="blur"
            blurDataURL={data?.img.asset.metadata.lqip}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 480px) 80vw, 40vw"
            fill
            priority
          />
        </figure>

        <h1 className={`${logoFont.className} font-semibold text-lg`}>
          {data?.name.toLowerCase() === "social media management" && (
            <u>DONE FOR YOU</u>
          )}{" "}
          {data?.name}
        </h1>

        <PortableText
          value={data?.description}
          components={descriptionComponent}
        />

        {data?.inclusions && (
          <span>
            <Inclusions inclusions={data.inclusions} />
          </span>
        )}

        <Link
          href={data?.cta.link}
          className="flex w-full justify-center items-center gap-2 p-2.5 text-xs text-brand-light font-medium uppercase bg-brand-dark transition ease-in-out hover:bg-brand-dark/90 active:bg-brand-dark/80 dark:bg-brand-light dark:text-brand-dark dark:hover:bg-brand-light/90 dark:active:bg-brand-light/80"
        >
          {data?.cta.hook}
          <FaAngleDoubleRight />
        </Link>
      </article>
    </section>
  );
}
