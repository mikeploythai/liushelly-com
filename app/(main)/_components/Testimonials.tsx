"use client";

import { blockTextComponents } from "@/components/shared/blockTextComponents";
import { primaryFont } from "@/lib/primaryFont";
import { Testimonial } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function Testimonials({ data }: { data: Testimonial[] }) {
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

  const buttons = [
    {
      label: "Previous quote",
      icon: <FaAngleDoubleLeft />,
      trigger: prevQuote,
    },
    { label: "Next quote", icon: <FaAngleDoubleRight />, trigger: nextQuote },
  ];

  return (
    <section className="bg-brand-dark">
      <div className="flex flex-col max-w-screen-md w-full mx-auto p-4 gap-4 text-brand-light">
        <header className="flex items-center justify-between">
          <h2
            className={`${primaryFont.className} font-semibold text-lg sm:text-xl`}
          >
            What others are saying.
          </h2>

          <div className="flex gap-2">
            {buttons.map(({ label, icon, trigger }, index) => (
              <button
                key={index}
                type="button"
                aria-label={label}
                className="flex p-2.5 transition ease-in-out hover:bg-brand-light/10 active:bg-brand-light/20 disabled:opacity-50"
                onClick={data.length ? trigger : undefined}
                disabled={data.length < 2}
              >
                {icon}
              </button>
            ))}
          </div>
        </header>

        {current?.quote && (
          <figure className="flex flex-col gap-4 md:h-72 md:items-center md:justify-center md:text-center">
            <PortableText
              value={current.quote}
              components={blockTextComponents}
            />

            {current?.name && (
              <figcaption className="text-brand-light text-sm font-medium">
                {current.name}, {current.occupation || "ADD OCCUPATION"}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
