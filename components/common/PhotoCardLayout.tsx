import sanity from "@/lib/sanityClient";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { ImageMetadata, TypedObject } from "@sanity/types";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const logoFont = Unbounded({ subsets: ["latin"] });

interface PhotoCardProps {
  title: string;
  heading: TypedObject[];
  img: {
    asset: {
      url: string;
      metadata: ImageMetadata;
    };
  };
  cta?: {
    hook: string;
    link: string;
  };
  bio?: TypedObject[];
}

export default async function PhotoCardLayout({ query }: { query: string }) {
  const data: PhotoCardProps = await sanity.fetch(query);

  const headingComponent: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1
          className={`${logoFont.className} text-lg font-semibold md:text-2xl ${
            data?.title !== "About Page"
              ? "text-brand-light sm:text-brand-dark"
              : "text-brand-dark"
          }`}
        >
          {children}
        </h1>
      ),
    },
  };

  const bioComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="text-sm">{children}</p>,
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            href={value.href}
            target="_blank"
            referrerPolicy="strict-origin-when-cross-origin"
            className="font-medium hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <section
      className={`flex relative w-full items-center justify-between gap-8 ${
        data?.title !== "About Page"
          ? "max-w-[640px] flex-row-reverse p-0 md:max-w-screen-md sm:p-4"
          : "max-w-screen-md flex-col p-4 md:flex-row"
      }`}
    >
      <figure
        className={`group flex flex-shrink-0 relative transition duration-500 ease-in-out sm:mr-2 sm:mb-2 sm:border sm:border-brand-dark sm:shadow-normal sm:shadow-brand-dark md:h-96 md:w-64 md:hover:shadow-hover md:hover:shadow-brand-dark ${
          data?.title !== "About Page"
            ? "h-[32rem] w-full sm:h-80 sm:w-56 sm:hover:shadow-hover sm:hover:shadow-brand-dark"
            : "h-96 w-full mr-2 mb-2 border border-brand-dark shadow-normal shadow-brand-dark"
        }`}
      >
        <Image
          src={data?.img.asset.url}
          alt="Photo of Shelly Liu, social media manager"
          placeholder="blur"
          blurDataURL={data?.img.asset.metadata.lqip}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 480px) 80vw, 40vw"
          fill
          priority
        />

        <span
          className={`absolute left-0 w-full h-full bg-gradient-to-tr from-brand-dark from-15% to-transparent ease-in-out md:transition md:duration-500 md:group-hover:opacity-0 ${
            data?.title !== "About Page" &&
            "sm:transition sm:group-hover:opacity-0"
          }`}
        />
      </figure>

      <div
        className={`flex flex-col ${
          data?.title !== "About Page"
            ? "absolute bottom-0 p-4 gap-4 sm:relative sm:p-0"
            : "gap-2"
        }`}
      >
        <PortableText value={data?.heading} components={headingComponent} />

        {data.cta && (
          <a
            href={data.cta.link}
            target="_blank"
            referrerPolicy="strict-origin-when-cross-origin"
            className="flex max-w-fit items-center gap-2 p-2.5 text-xs font-medium uppercase bg-brand-light transition ease-in-out hover:bg-brand-light/90 active:bg-brand-light/80 sm:bg-brand-dark sm:text-brand-light sm:hover:bg-brand-dark/90 sm:active:bg-brand-dark/80 md:p-3.5 md:text-base"
          >
            {data.cta.hook}

            <FaAngleDoubleRight />
          </a>
        )}

        {data.bio && (
          <PortableText value={data.bio} components={bioComponents} />
        )}
      </div>
    </section>
  );
}
