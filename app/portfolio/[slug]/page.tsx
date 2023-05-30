import { PortfolioProps } from "@/lib/portfolioProps";
import sanity from "@/lib/sanityClient";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import { Metadata } from "next";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const logoFont = Unbounded({ subsets: ["latin"] });
const builder = urlBuilder(sanity);

interface Props {
  params: {
    slug: string;
  };
}

const descriptionComponent: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const { width, height } = getImageDimensions(value);

      return (
        <Image
          src={builder.image(value).url()}
          alt=""
          width={width}
          height={height}
          className="border border-brand-dark"
        />
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2
        className={`${logoFont.className} font-semibold text-base sm:text-lg`}
      >
        {children}
      </h2>
    ),
    normal: ({ children }) => (
      <>
        {children?.toString().length ? (
          <p className="text-sm">{children}</p>
        ) : (
          <br />
        )}
      </>
    ),
  },
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const query = groq`
    *[_type == "portfolio" && slug.current == $slug][0] { name }
  `;
  const data: PortfolioProps = await sanity.fetch(query, { slug });

  return {
    title: `${data.name.toUpperCase()} | Shelly Liu, Social Media Manager`,
  };
}

export default async function BrandPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "portfolio" && slug.current == $slug][0] {
      name,
      description,
      button,
      img {
        asset -> {
          url,
          metadata
        }
      },
    }
  `;
  const data: PortfolioProps = await sanity.fetch(query, { slug });

  return (
    <section className="flex flex-col w-full max-w-screen-md items-center justify-between gap-4 p-4">
      <figure className="relative flex h-32 w-full mr-2 mb-2 border border-brand-dark shadow-normal shadow-brand-dark sm:h-48 md:h-64">
        <Image
          src={data?.img.asset.url}
          alt=""
          placeholder="blur"
          blurDataURL={data?.img.asset.metadata.lqip}
          style={{
            objectFit: "contain",
            backgroundColor: "white",
            padding: "2rem",
          }}
          sizes="(max-width: 480px) 80vw, 40vw"
          fill
          priority
        />
      </figure>

      <div className="flex flex-col w-full gap-4">
        <header className="flex flex-col w-full items-center justify-between gap-4 md:flex-row">
          <h1
            className={`${logoFont.className} font-semibold text-lg text-center sm:text-2xl`}
          >
            {data.name}
          </h1>

          <a
            href={data?.button.link}
            target="_blank"
            referrerPolicy="strict-origin-when-cross-origin"
            className={`flex w-full justify-center items-center gap-2 p-2.5 text-xs font-medium uppercase transition ease-in-out text-brand-light bg-brand-dark hover:bg-brand-dark/90 active:bg-brand-dark/80 md:w-fit`}
          >
            {data?.button.cta}
            <FaAngleDoubleRight />
          </a>
        </header>

        <hr className="border-brand-dark" />

        <PortableText
          value={data?.description}
          components={descriptionComponent}
        />
      </div>
    </section>
  );
}
