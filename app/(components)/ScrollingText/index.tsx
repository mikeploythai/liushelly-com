import sanity from "@/lib/sanityClient";
import { groq } from "next-sanity";
import ScrollingTextList from "./ScrollingTextList";

const query = groq`
  *[_type == "scrollingText"] | order(orderRank) {
    text
  }
`;

export interface ScrollingTextProps {
  text: string;
}

export default async function ScrollingText() {
  const data: ScrollingTextProps[] = await sanity.fetch(query);

  return (
    <section className="flex w-full justify-center bg-brand-dark">
      <div className="group flex relative max-w-screen-lg w-full p-4 gap-2 overflow-hidden">
        <ScrollingTextList data={data} />
        <ScrollingTextList data={data} />
        <span className="absolute top-0 left-0 h-full w-1/5 bg-gradient-to-r from-brand-dark to-transparent" />
        <span className="absolute top-0 right-0 h-full w-1/5 bg-gradient-to-l from-brand-dark to-transparent" />
      </div>
    </section>
  );
}
