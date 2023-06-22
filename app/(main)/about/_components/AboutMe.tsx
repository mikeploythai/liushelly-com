import Frame from "@/components/shared/Frame";
import LinkButton from "@/components/shared/LinkButton";
import { blockTextComponents } from "@/components/shared/blockTextComponents";
import sanityImage from "@/lib/sanity/image";
import { Hero } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function AboutMe({ data }: { data: Hero }) {
  return (
    <section className="flex flex-col max-w-screen-md w-full items-center mx-auto p-4 gap-4 md:flex-row md:gap-8 md:py-16">
      {data.image && (
        <Frame isHoverable>
          <figure className="group relative flex w-full h-72 md:w-64 md:h-96">
            <Image
              src={sanityImage(data.image).format("webp").url()}
              alt="Photo of Shelly Liu, Social Media Manager"
              placeholder="blur"
              blurDataURL={data.image.blur}
              sizes="(max-width:768px) 70vw, 30vw"
              className="object-cover object-center sm:object-[center_40%] md:object-center"
              fill
              priority
            />

            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-dark from-15% to-transparent md:transition md:duration-500 md:ease-in-out md:group-hover:opacity-0" />
          </figure>
        </Frame>
      )}

      <div className="flex flex-col">
        {data.description && (
          <PortableText
            value={data.description}
            components={blockTextComponents}
          />
        )}
        <br />
        {data.cta?.hook && (
          <LinkButton href={data.cta.link!} isExternal>
            {data.cta.hook}
          </LinkButton>
        )}
      </div>
    </section>
  );
}
