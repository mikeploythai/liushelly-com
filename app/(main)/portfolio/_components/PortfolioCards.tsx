import Card from "@/components/shared/Card";
import { primaryFont } from "@/lib/primaryFont";
import { Portfolio } from "@/lib/types";
import Link from "next/link";

export default function PortfolioCards({ data }: { data: Portfolio[] }) {
  return (
    <section className="flex flex-col max-w-screen-lg w-full items-center mx-auto p-4 gap-4 sm:gap-16 sm:px-4 sm:py-16">
      <h1
        className={`${primaryFont.className} font-semibold text-xl sm:text-2xl sm:text-center`}
      >
        Some brands and businesses I&apos;ve worked with!
      </h1>

      <article className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(
          (data) =>
            data.slug && (
              <Link key={data._id} href={`/portfolio/${data.slug.current}`}>
                <Card data={data} colorTheme="dark" />
              </Link>
            )
        )}
      </article>
    </section>
  );
}
