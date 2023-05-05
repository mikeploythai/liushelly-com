import sanity from "@/lib/sanityClient";
import { ImageMetadata } from "@sanity/types";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import InstagramPosts from "./InstagramPosts";

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

export interface InstagramPreviewProps {
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

      <InstagramPosts data={data} />
    </section>
  );
}
