import { primaryFont } from "@/lib/primaryFont";
import sanityImage from "@/lib/sanity/image";
import { InstagramCard } from "@/lib/types";
import Image from "next/image";

export default function InstagramSamples({ data }: { data: InstagramCard[] }) {
  return (
    <section className="flex flex-col max-w-screen-lg w-full mx-auto p-4 gap-4">
      <h2
        className={`${primaryFont.className} font-semibold text-lg sm:text-xl lg:text-center`}
      >
        Follow me on Instagram for <u>FREE</u> social media tips and advice.
      </h2>

      <div className="grid w-full gap-4 grid-cols-2 sm:grid-cols-4">
        {data.map(
          ({ _id, title, image, link }) =>
            image && (
              <a
                key={_id}
                href={link}
                target="_blank"
                referrerPolicy="strict-origin-when-cross-origin"
              >
                <Image
                  src={sanityImage(image).url()}
                  alt={title || ""}
                  placeholder="blur"
                  blurDataURL={image.blur}
                  height={1350}
                  width={1080}
                  sizes="(max-width:640px) 50vw, 30vw"
                  className="border border-brand-dark transition ease-in-out hover:opacity-90 active:opacity-80"
                />
              </a>
            )
        )}
      </div>
    </section>
  );
}
