import Card from "@/components/shared/Card";
import { primaryFont } from "@/lib/primaryFont";
import { Portfolio } from "@/lib/types";
import Link from "next/link";

export default function PortfolioCards({ data }: { data: Portfolio[] }) {
  return (
    <section className="flex flex-col max-w-screen-lg w-full mx-auto p-4 gap-4">
      <h2
        className={`${primaryFont.className} font-semibold text-lg sm:text-xl sm:text-center`}
      >
        Some brands and businesses I&apos;ve worked with!
      </h2>

      <article className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(
          (data) =>
            data.slug && (
              <Link key={data._id} href={`/${data.slug.current}`}>
                <Card data={data} colorTheme="dark" />
              </Link>
            )
        )}
      </article>
    </section>
  );
}
