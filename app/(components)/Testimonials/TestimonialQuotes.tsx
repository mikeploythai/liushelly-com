import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Unbounded } from "next/font/google";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { TestimonialProps } from ".";

const logoFont = Unbounded({ subsets: ["latin"] });

const quoteComponent: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <blockquote className="text-sm text-brand-light">{children}</blockquote>
    ),
  },
};

export default function TestimonialQuotes({
  data,
}: {
  data: TestimonialProps[];
}) {
  const [index, setIndex] = useState(0);
  const current = data[index];

  const prevQuote = () => {
    if (current === data[0]) setIndex(data.length - 1);
    else setIndex(index - 1);
  };

  const nextQuote = () => {
    if (current === data[data.length - 1]) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <>
      <header className="flex items-center justify-between">
        <h2
          className={`${logoFont.className} font-semibold text-brand-light text-base sm:text-lg`}
        >
          What others are saying.
        </h2>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous quote"
            className="flex p-2.5 text-base text-brand-light transition ease-in-out hover:bg-brand-light/10 active:bg-brand-light/20"
            onClick={prevQuote}
          >
            <FaAngleDoubleLeft />
          </button>

          <button
            type="button"
            aria-label="Next quote"
            className="flex p-2.5 text-base text-brand-light transition ease-in-out hover:bg-brand-light/10 active:bg-brand-light/20"
            onClick={nextQuote}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      </header>

      <figure className="flex flex-col gap-4 sm:h-72 sm:justify-center sm:items-center sm:text-center">
        <PortableText value={current.quote} components={quoteComponent} />

        <figcaption className="text-sm text-brand-light font-medium">
          {current.name}, {current.occupation}
        </figcaption>
      </figure>
    </>
  );
}
