import LinkButton from "@/components/shared/LinkButton";
import { blockTextComponents } from "@/components/shared/blockTextComponents";
import { primaryFont } from "@/lib/primaryFont";
import sanityImage from "@/lib/sanity/image";
import { MainService, Service } from "@/lib/types";
import { Tab } from "@headlessui/react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type ServiceDetailsProps = {
  data: Service | MainService;
  colorTheme?: "light" | "dark";
};

export default function ServiceDetails({
  data,
  colorTheme,
}: ServiceDetailsProps) {
  const brandColor = colorTheme === "dark" ? "brand-light" : "brand-dark";

  return (
    <>
      {data?.image && (
        <figure className="relative w-full h-48 sm:h-64">
          <Image
            src={sanityImage(data.image).url()}
            alt=""
            placeholder="blur"
            blurDataURL={data.image.blur}
            sizes="(max-width:640px) 60vw, 40vw"
            className={`object-cover border border-${brandColor}`}
            priority
            fill
          />
        </figure>
      )}

      <hgroup className="flex flex-col">
        {data?.name && (
          <h2 className={`${primaryFont.className} font-semibold text-lg mb-1`}>
            {data?.name === "Social Media Management" && <u>DONE FOR YOU</u>}{" "}
            {data?.name}
          </h2>
        )}
        {data?.description && (
          <PortableText
            value={data.description}
            components={blockTextComponents}
          />
        )}
      </hgroup>

      {(data as MainService).extras && (
        <Tab.Group>
          <Tab.List className="flex gap-2">
            {(data as MainService).extras?.map(({ tab }, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `w-full px-4 py-2 text-xs font-medium uppercase text-${brandColor} border border-${brandColor} bg-${brandColor} transition ease-in-out focus:outline-none ${
                    selected
                      ? "bg-opacity-10"
                      : "bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20"
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels
            className={`-mt-2 px-4 py-2 border border-dashed border-${brandColor}`}
          >
            {(data as MainService).extras?.map(({ description }, index) => (
              <Tab.Panel key={index}>
                {description && (
                  <PortableText
                    value={description}
                    components={blockTextComponents}
                  />
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      )}

      {data.cta?.hook && (
        <LinkButton href={data.cta.link!} colorTheme={colorTheme} isExternal>
          {data.cta.hook}
        </LinkButton>
      )}
    </>
  );
}
