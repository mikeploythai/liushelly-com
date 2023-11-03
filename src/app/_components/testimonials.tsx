"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { testimonials } from "~/lib/fake-db";
import { Button } from "./ui/button";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function getPrevQuote() {
    if (index === 0) setIndex(testimonials.length - 1);
    else setIndex((curr) => curr - 1);
  }

  function getNextQuote() {
    if (index === testimonials.length - 1) setIndex(0);
    else setIndex((curr) => curr + 1);
  }

  return (
    <div className="mx-auto max-w-screen-lg space-y-6 p-6 text-violet-200">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-medium md:text-2xl">
          What clients have to say...
        </h2>

        <div className="shrink-0 space-x-1.5">
          <Button size="icon" onClick={getPrevQuote}>
            <IconChevronLeft />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button size="icon" onClick={getNextQuote}>
            <IconChevronRight />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-6 italic md:min-h-[288px] md:p-6">
        <blockquote>&quot;{testimonials[index]?.quote}&quot;</blockquote>
        <p className="font-medium">
          {testimonials[index]?.author}, {testimonials[index]?.role}
        </p>
      </div>
    </div>
  );
}
