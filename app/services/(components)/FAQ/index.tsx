import sanity from "@/lib/sanityClient";
import { TypedObject } from "@sanity/types";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import FAQDropdown from "./FAQDropdown";

const logoFont = Unbounded({ subsets: ["latin"] });

const query = groq`
  *[_type == "faq"] | order(orderRank) {
    question,
    answer
  }
`;

export interface FAQProps {
  question: string;
  answer: TypedObject[];
}

export default async function FAQ() {
  const data: FAQProps[] = await sanity.fetch(query);

  return (
    <section className="flex flex-col max-w-[640px] w-full p-4 gap-2 sm:items-center">
      <h2
        className={`${logoFont.className} font-semibold text-base sm:text-lg`}
      >
        Frequently asked questions.
      </h2>

      <FAQDropdown data={data} />
    </section>
  );
}
