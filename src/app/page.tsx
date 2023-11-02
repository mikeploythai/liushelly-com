import { IconArrowUpRight, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/cn";
import { services } from "~/lib/fake-db";
import Marquee from "./_components/marquee";
import { buttonVariants } from "./_components/ui/button";
import { Card, CardContent, CardFooter } from "./_components/ui/card";

export default function HomePage() {
  return (
    <main className="flex-1 duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-6">
      <section className="mx-auto flex max-w-screen-lg items-center gap-6 p-6">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl font-medium">
            Let me help your business flourish through organic social media
            growth.
          </h1>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Book a discovery call
            <IconArrowUpRight size={20} />
          </a>
        </div>

        <figure className="mb-2 mr-2 max-w-fit border border-indigo-950 shadow-boxy transition duration-300 hover:border-indigo-900 hover:shadow-boxy-hover hover:shadow-indigo-900">
          <Image
            src=""
            alt=""
            width={288}
            height={432}
            className="h-full bg-violet-50"
          />
        </figure>
      </section>

      <Marquee />

      <section className="mx-auto max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 text-center">
          <h2 className="font-heading text-2xl font-medium">
            Personalized services that&apos;ll skyrocket your socials.
          </h2>

          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 font-semibold",
            )}
          >
            Explore services
            <IconChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {services.slice(0, 3).map(({ name }) => (
            <Card key={name}>
              <CardContent className="relative h-40">
                <Image
                  src=""
                  alt=""
                  className="border border-indigo-950 bg-violet-50"
                  fill
                />
              </CardContent>

              <CardFooter>
                <Link href="/" className={buttonVariants({ class: "w-full" })}>
                  {name}
                  <IconChevronRight size={18} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
