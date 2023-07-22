import { blockTextComponents } from "@/components/shared/blockTextComponents";
import sanityImage from "@/lib/sanity/image";
import { Hero } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Hero({ data }: { data: Hero }) {
  return (
    <section className="relative flex flex-row-reverse max-w-screen-sm w-full items-center mx-auto sm:p-4 sm:gap-8 md:max-w-screen-md">
      {data.image && (
        <figure className="group relative flex flex-shrink-0 h-[32rem] w-full sm:h-80 sm:w-56 sm:mr-2 sm:mb-2 sm:border sm:border-brand-dark sm:shadow-normal sm:shadow-brand-dark sm:transition sm:duration-500 sm:ease-in-out sm:hover:shadow-hover sm:hover:shadow-brand-dark md:h-96 md:w-64">
          <Image
            src={sanityImage(data.image).format("webp").sharpen(75).url()}
            alt="Photo of Shelly Liu"
            placeholder="blur"
            blurDataURL={data.image.blur}
            className="object-cover"
            sizes="(max-width:640px) 70vw, 30vw"
            fill
            priority
          />
          <span className="absolute top-0 w-full h-full bg-gradient-to-tr from-brand-dark from-15% to-transparent sm:transition sm:duration-500 sm:ease-in-out sm:group-hover:opacity-0" />
        </figure>
      )}

      <div className="absolute flex flex-col bottom-0 p-4 gap-4 text-brand-light sm:relative sm:p-0 sm:text-brand-dark">
        {data.description && (
          <PortableText
            value={data.description}
            components={blockTextComponents}
          />
        )}
        {data.cta?.hook && (
          <a
            href={data.cta.link}
            target="_blank"
            referrerPolicy="strict-origin-when-cross-origin"
            aria-disabled={data.cta.link === undefined}
            className="flex items-center justify-center w-fit p-2.5 gap-2 uppercase font-medium text-start text-xs text-brand-dark bg-brand-light transition ease-in-out hover:bg-brand-light/90 active:bg-brand-light/80 sm:bg-brand-dark sm:text-brand-light sm:hover:bg-brand-dark/90 sm:active:bg-brand-dark/80 md:p-3.5 md:text-base aria-disabled:opacity-50"
          >
            {data.cta.hook}
            <FaAngleDoubleRight />
          </a>
        )}
      </div>
    </section>
  );
}
