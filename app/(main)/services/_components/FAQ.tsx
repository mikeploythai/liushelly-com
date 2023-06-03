"use client";

import { blockTextComponents } from "@/components/shared/blockTextComponents";
import { primaryFont } from "@/lib/primaryFont";
import { FAQ } from "@/lib/types";
import { Disclosure } from "@headlessui/react";
import { PortableText } from "@portabletext/react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function FAQ({ data }: { data: FAQ[] }) {
  return (
    <section className="flex flex-col max-w-screen-sm w-full mx-auto p-4 gap-2">
      <h2
        className={`${primaryFont.className} font-semibold text-lg sm:text-xl sm:text-center`}
      >
        Frequently asked questions.
      </h2>

      {data.map(
        ({ _id, question, answer }) =>
          question && (
            <Disclosure key={_id}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    disabled={answer === undefined}
                    className={`flex w-full justify-between items-center px-4 py-2 gap-2 border text-xs text-start font-medium uppercase transition ease-in-out hover:cursor-pointer disabled:opacity-50 ${
                      open
                        ? "bg-brand-dark/10 border-brand-dark"
                        : "border-brand-dark text-brand-dark hover:text-brand-dark hover:bg-brand-dark/10 active:bg-brand-dark/20"
                    }`}
                  >
                    {question}
                    {open ? <FaAngleUp /> : <FaAngleDown />}
                  </Disclosure.Button>

                  {answer && (
                    <Disclosure.Panel className="w-full -mt-2 px-4 py-2 border-x border-b border-dashed border-brand-dark">
                      <PortableText
                        value={answer}
                        components={blockTextComponents}
                      />
                    </Disclosure.Panel>
                  )}
                </>
              )}
            </Disclosure>
          )
      )}
    </section>
  );
}
