import { Disclosure } from "@headlessui/react";
import { FaAngleDown, FaAngleUp, FaCheckCircle } from "react-icons/fa";

export default function Inclusions({ inclusions }: { inclusions: string[] }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex w-full justify-between items-center text-sm font-medium border-t border-t-brand-dark border-b-brand-dark py-2 px-4 dark:border-t-brand-light dark:border-b-brand-light ${
              !open && "border-b"
            }`}
          >
            All packages include...
            {open ? <FaAngleUp /> : <FaAngleDown />}
          </Disclosure.Button>

          <Disclosure.Panel className="px-4 pb-2 border-b border-b-brand-dark dark:border-b-brand-light">
            {inclusions.map((text, index) => {
              return (
                <p key={index} className="flex gap-2 items-center text-sm">
                  <FaCheckCircle />
                  {text}
                </p>
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
