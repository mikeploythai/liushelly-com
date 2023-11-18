import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../_components/page-wrapper";
import { buttonVariants } from "../_components/ui/button";
import { Card, CardContent, CardFooter } from "../_components/ui/card";

export default function PortfolioPage() {
  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-6 p-6">
      <h1 className="font-heading text-3xl font-medium md:py-6 md:text-center md:text-4xl">
        Brands I&apos;ve worked with!
      </h1>

      <section className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3">
        {Array(6)
          .fill("brand")
          .map((title, index) => (
            <Card key={index}>
              <CardContent className="relative h-32 sm:h-40">
                <Image
                  src=""
                  alt=""
                  className="border border-indigo-950 bg-white"
                  fill
                />
              </CardContent>

              <CardFooter>
                <Link
                  href={`/portfolio/brand-${index + 1}`}
                  className={buttonVariants({ class: "w-full" })}
                >
                  <span className="truncate">
                    {title} {index + 1}
                  </span>
                  <IconChevronRight size={18} className="ml-auto" />
                </Link>
              </CardFooter>
            </Card>
          ))}
      </section>
    </PageWrapper>
  );
}
