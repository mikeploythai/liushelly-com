import Frame from "@/components/shared/Frame";
import LinkButton from "@/components/shared/LinkButton";
import { blockTextComponents } from "@/components/shared/blockTextComponents";
import { primaryFont } from "@/lib/primaryFont";
import sanityImage from "@/lib/sanity/image";
import { Portfolio } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function BrandShowcase({ data }: { data: Portfolio }) {
  return (
    <section className="flex flex-col max-w-screen-md w-full items-center mx-auto p-4 gap-4">
      {data.image && (
        <Frame>
          <figure className="relative w-full h-32 sm:h-64">
            <Image
              src={sanityImage(data.image).url()}
              alt={`The logo of ${data.name}`}
              placeholder="blur"
              blurDataURL={data.image.blur}
              sizes="(max-width: 768px) 85vw, 45vw"
              className="object-cover"
              fill
              priority
            />
          </figure>
        </Frame>
      )}

      <div className="flex flex-col w-full gap-4">
        {data.name && (
          <header className="flex flex-col w-full gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1
              className={`${primaryFont.className} font-semibold text-xl text-center sm:text-2xl sm:text-start`}
            >
              {data.name}
            </h1>

            {data.cta?.hook && (
              <LinkButton href={data.cta.link!} isExternal>
                {data.cta.hook}
              </LinkButton>
            )}
          </header>
        )}

        <hr className="border-brand-dark" />

        {data.description && (
          <span>
            <PortableText
              value={data.description}
              components={blockTextComponents}
            />
          </span>
        )}
      </div>
    </section>
  );
}
