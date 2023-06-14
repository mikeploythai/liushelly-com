import { blockTextComponents } from "@/components/shared/blockTextComponents";
import { primaryFont } from "@/lib/primaryFont";
import { PrivacyPolicy } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";

export default function Policy({ data }: { data: PrivacyPolicy }) {
  return (
    <section className="flex flex-col max-w-screen-md w-full mx-auto p-4 md:py-16">
      <hgroup className="flex flex-col gap-2 mb-4">
        <h1
          className={`${primaryFont.className} font-semibold text-xl sm:text-2xl`}
        >
          Privacy Policy
        </h1>

        <small className="text-xs font-medium">
          Last updated: {dayjs(data._updatedAt).format("MMMM DD, YYYY")}
        </small>
      </hgroup>

      <PortableText value={data.policy} components={blockTextComponents} />
    </section>
  );
}
