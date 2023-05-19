import { ServicePackages } from "@/lib/serviceProps";
import { Tab } from "@headlessui/react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { TypedObject } from "@sanity/types";
import { FaCheckCircle } from "react-icons/fa";

export default function Details({
  packages,
  contents,
}: {
  packages: ServicePackages[];
  contents: TypedObject[];
}) {
  const contentComponent: PortableTextComponents = {
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
    list: {
      bullet: ({ children }) => <ul className="text-sm">{children}</ul>,
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="flex gap-2 items-center">
          <FaCheckCircle />
          {children}
        </li>
      ),
    },
  };

  return (
    <section>
      <Tab.Group>
        <Tab.List className="flex gap-2">
          <Tab
            className={({ selected }) =>
              `w-full px-4 py-2 border text-xs font-medium uppercase transition ease-in-out focus:outline-none ${
                selected
                  ? "bg-brand-dark/10 border-brand-dark"
                  : "border-brand-dark/50 text-brand-dark/50 hover:text-brand-dark hover:bg-brand-dark/10 active:bg-brand-dark/20"
              }`
            }
          >
            Packages
          </Tab>

          <Tab
            className={({ selected }) =>
              `w-full px-4 py-2 border text-xs font-medium uppercase transition ease-in-out focus:outline-none ${
                selected
                  ? "bg-brand-dark/10 border-brand-dark"
                  : "border-brand-dark/50 text-brand-dark/50 hover:text-brand-dark hover:bg-brand-dark/10 active:bg-brand-dark/20"
              }`
            }
          >
            Contents
          </Tab>
        </Tab.List>

        <Tab.Panels className="px-4 py-2 mt-2 border border-dashed border-brand-dark">
          <Tab.Panel className="flex flex-col gap-4 focus:outline-none">
            {packages.map(({ name, price, details }, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col ${price && "gap-[6px]"}`}
                >
                  <hgroup>
                    <h2 className="font-bold">{name}</h2>
                    {price && (
                      <p className="text-xs font-medium">${price} per month</p>
                    )}
                  </hgroup>

                  <p className="text-sm">{details}</p>
                </div>
              );
            })}
          </Tab.Panel>

          <Tab.Panel className="focus:outline-none">
            <PortableText value={contents} components={contentComponent} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
