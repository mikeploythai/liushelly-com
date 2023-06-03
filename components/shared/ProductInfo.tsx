import { ServicePackages } from "@/lib/servicesProps";
import { Tab } from "@headlessui/react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { TypedObject } from "@sanity/types";
import { FaCheckCircle } from "react-icons/fa";

interface ProductInfoProps {
  packages: ServicePackages[];
  contents: TypedObject[];
  modal?: boolean;
}

export default function ProductInfo({
  packages,
  contents,
  modal = false,
}: ProductInfoProps) {
  const tabs = ["packages", "contents"];
  const contentComponent: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <>
          {children?.toString().length ? (
            <p className={`text-sm ${modal && "text-brand-light"}`}>
              {children}
            </p>
          ) : (
            <br />
          )}
        </>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className={`text-sm ${modal && "text-brand-light"}`}>{children}</ul>
      ),
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
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                className={({ selected }) =>
                  `w-full px-4 py-2 border text-xs font-medium uppercase transition ease-in-out focus:outline-none ${
                    modal
                      ? selected
                        ? "text-brand-light bg-brand-light/10 border-brand-light"
                        : "border-brand-light/50 text-brand-light/50 hover:text-brand-light hover:bg-brand-light/10 active:bg-brand-light/20"
                      : selected
                      ? "bg-brand-dark/10 border-brand-dark"
                      : "border-brand-dark/50 text-brand-dark/50 hover:text-brand-dark hover:bg-brand-dark/10 active:bg-brand-dark/20"
                  }`
                }
              >
                {tab}
              </Tab>
            );
          })}
        </Tab.List>

        <Tab.Panels
          className={`px-4 py-2 mt-2 border border-dashed ${
            modal ? "border-brand-light" : "border-brand-dark"
          }`}
        >
          <Tab.Panel as="ul" className="flex flex-col gap-4 focus:outline-none">
            {packages.map(({ name, price, details }, index) => {
              return (
                <li
                  key={index}
                  className={`flex flex-col ${price && "gap-[6px]"} ${
                    modal && "text-brand-light"
                  }`}
                >
                  <hgroup>
                    <h2 className="font-bold">{name}</h2>
                    {price && (
                      <p className="text-xs font-medium">${price} per month</p>
                    )}
                  </hgroup>

                  <p className="text-sm">{details}</p>
                </li>
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
