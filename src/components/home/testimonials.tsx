"use client";

import type { Testimonial } from "~/lib/types";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import BlockContent from "../block-content";
import MarkdownProvider from "../providers/markdown";
import { Button } from "../ui/button";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  function getPrevQuote() {
    if (!testimonials) return;

    if (index === 0) setIndex(testimonials.length - 1);
    else setIndex((curr) => curr - 1);
  }

  function getNextQuote() {
    if (!testimonials) return;

    if (index === testimonials.length - 1) setIndex(0);
    else setIndex((curr) => curr + 1);
  }

  return (
    <div className="mx-auto w-full max-w-screen-lg space-y-6 p-6 text-violet-200">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-heading text-xl font-medium md:text-2xl">
          Client testimonials
        </h2>

        <div className="flex">
          <Button
            size="icon"
            onClick={getPrevQuote}
            disabled={!testimonials.length}
          >
            <IconArrowLeft />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            size="icon"
            onClick={getNextQuote}
            disabled={!testimonials.length}
          >
            <IconArrowRight />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>

      {testimonials ? (
        <MarkdownProvider
          theme="secondary"
          className="flex flex-col justify-center prose-p:m-0 md:min-h-[288px] md:p-6"
        >
          <BlockContent content={testimonials[index]?.quote} />
        </MarkdownProvider>
      ) : (
        <p className="border border-dashed border-violet-200 p-16 md:text-center">
          No testimonials yet!
        </p>
      )}
    </div>
  );
}
