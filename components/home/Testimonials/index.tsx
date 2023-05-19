import sanity from "@/lib/sanityClient";
import { TypedObject } from "@sanity/types";
import { groq } from "next-sanity";
import TestimonialQuotes from "./TestimonialQuotes";

const query = groq`
  *[_type == "testimonial"] | order(orderRank) {
    name,
    occupation,
    quote
  }
`;

export interface TestimonialProps {
  name: string;
  occupation: string;
  quote: TypedObject[];
}

export default async function Testimonials() {
  const data: TestimonialProps[] = await sanity.fetch(query);

  return (
    <section className="flex w-full justify-center bg-brand-dark">
      <div className="flex flex-col max-w-screen-md w-full p-4 gap-4 sm:gap-0">
        <TestimonialQuotes data={data}/>
      </div>
    </section>
  );
}
