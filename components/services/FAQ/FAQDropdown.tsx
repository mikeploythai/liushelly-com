import { Disclosure } from "@headlessui/react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FAQProps } from ".";

const answerComponent: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <>
        {children?.toString().length ? (
          <p className="text-sm">{children}</p>
        ) : (
          <br />
        )}
      </>
    ),
  },
};

export default function FAQDropdown({ data }: { data: FAQProps[] }) {
  return (
    <>
      {data?.map(({ question, answer }, index) => {
        return (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between items-center px-4 py-2 border text-xs text-start font-medium gap-2 uppercase transition ease-in-out hover:cursor-pointer ${
                    open
                      ? "bg-brand-dark/10 border-brand-dark"
                      : "border-brand-dark text-brand-dark hover:text-brand-dark hover:bg-brand-dark/10 active:bg-brand-dark/20"
                  }`}
                >
                  {question}
                  {open ? <FaAngleUp /> : <FaAngleDown />}
                </Disclosure.Button>

                <Disclosure.Panel className="w-full -mt-2 px-4 py-2 border-x border-b border-dashed border-brand-dark">
                  <PortableText value={answer} components={answerComponent} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </>
  );
}
