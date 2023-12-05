"use client";

import type { Testimonial } from "~/lib/types";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
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

  if (!testimonials) return;

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

      <MarkdownProvider
        theme="secondary"
        className="flex flex-col justify-center prose-p:m-0 md:min-h-[288px] md:p-6"
      >
        <BlockContent content={testimonials[index]!.quote} />
      </MarkdownProvider>
    </div>
  );
}
