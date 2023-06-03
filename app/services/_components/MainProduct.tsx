"use client";

import Frame from "@/components/shared/Frame";
import ServiceDetails from "@/components/shared/Service/Details";
import { primaryFont } from "@/lib/primaryFont";
import { MainService, Service } from "@/lib/types";

type DataType = {
  data: Service | MainService;
};

export default function MainProduct({ data }: DataType) {
  return (
    <section className="flex flex-col max-w-screen-sm w-full items-center mx-auto p-4 gap-4 sm:gap-16 sm:px-4 sm:py-16">
      <h1
        className={`${primaryFont.className} font-semibold text-xl sm:text-2xl sm:text-center`}
      >
        Take your brand&apos;s social media presence to the next level.
      </h1>

      <Frame isPadded>
        <ServiceDetails data={data} />
      </Frame>
    </section>
  );
}
