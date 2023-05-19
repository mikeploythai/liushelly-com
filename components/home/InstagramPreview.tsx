import sanity from "@/lib/sanityClient";
import { ImageMetadata } from "@sanity/types";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import Image from "next/image";

const logoFont = Unbounded({ subsets: ["latin"] });

const query = groq`
  *[_type == "igPreview"] | order(orderRank) {
    title,
    img {
      asset -> {
        url,
        metadata
      }
    },
    link
  }
`;

interface InstagramPreviewProps {
  title: string;
  img: {
    asset: {
      url: string;
      metadata: ImageMetadata;
    };
  };
  link: string;
}

export default async function InstagramPreview() {
  const data: InstagramPreviewProps[] = await sanity.fetch(query);

  return (
    <section className="flex flex-col max-w-screen-lg w-full items-center p-4 gap-4">
      <h2
        className={`${logoFont.className} text-base font-semibold sm:text-lg`}
      >
        Follow me on Instagram for <u>FREE</u> social media tips and advice.
      </h2>

      <div className="grid w-full gap-4 grid-cols-2 sm:grid-cols-4">
        {data?.map(({ title, img, link }, index) => {
          return (
            <figure
              key={index}
              className="border border-brand-dark"
            >
              <a
                href={link}
                target="_blank"
                referrerPolicy="strict-origin-when-cross-origin"
                className="relative"
              >
                <span className="absolute left-0 w-full h-full transition ease-in-out hover:bg-brand-light/10 active:bg-brand-light/20" />

                <Image
                  src={img.asset.url}
                  alt={title}
                  placeholder="blur"
                  blurDataURL={img.asset.metadata.lqip}
                  height={1350}
                  width={1080}
                  sizes="(max-width: 480px) 40vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </a>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
