import { IconArrowUpRight, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/cn";
import { services } from "~/lib/fake-db";
import ExternalLink from "./_components/external-link";
import Marquee from "./_components/marquee";
import PageWrapper from "./_components/page-wrapper";
import Testimonials from "./_components/testimonials";
import { buttonVariants } from "./_components/ui/button";
import { Card, CardContent, CardFooter } from "./_components/ui/card";

export default function HomePage() {
  const servicesList = services.slice(0, 3);

  return (
    <PageWrapper>
      <section className="relative mx-auto flex max-w-screen-lg flex-col items-center gap-6 sm:flex-row sm:p-6">
        <div className="absolute bottom-0 space-y-6 p-6 sm:relative sm:p-0">
          <h1 className="font-heading text-3xl font-medium text-violet-200 sm:text-indigo-950 md:text-4xl">
            Let me help your business flourish through organic social media
            growth.
          </h1>

          <ExternalLink
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-200 text-indigo-950 no-underline hover:bg-indigo-100 hover:text-indigo-950 focus-visible:bg-indigo-100 focus-visible:text-indigo-950",
              "sm:bg-indigo-950 sm:text-violet-200 sm:hover:bg-indigo-900 sm:hover:text-violet-200 sm:focus-visible:bg-indigo-900 sm:focus-visible:text-violet-200",
            )}
          >
            Book a discovery call
            <IconArrowUpRight size={20} />
          </ExternalLink>
        </div>

        <figure className="relative -z-10 w-full border-indigo-950 transition duration-300 sm:z-0 sm:mb-2 sm:mr-2 sm:max-w-fit sm:border sm:shadow-boxy md:hover:border-indigo-900 md:hover:shadow-boxy-hover md:hover:shadow-indigo-900">
          <Image
            src=""
            alt=""
            width={288}
            height={432}
            className="h-full w-full bg-violet-50 sm:w-72"
          />

          <span className="absolute inset-0 bg-gradient-to-tr from-indigo-950 from-15% to-transparent sm:hidden" />
        </figure>
      </section>

      <Marquee />

      <section className="mx-auto max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Personalized services that&apos;ll skyrocket your socials.
          </h2>

          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "link" }), "p-0")}
          >
            Explore services
            <IconChevronRight size={18} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {servicesList.map(({ name, slug }, i) => (
            <Card
              key={name}
              className={cn(
                servicesList.length % 2 &&
                  i === servicesList.length - 1 &&
                  "sm:col-span-2 md:col-span-1",
              )}
            >
              <CardContent className="relative h-32 sm:h-40">
                <Image
                  src=""
                  alt=""
                  className="border border-indigo-950 bg-violet-50"
                  fill
                />
              </CardContent>

              <CardFooter>
                <Link
                  href={`/services/${slug}`}
                  className={buttonVariants({ class: "w-full" })}
                >
                  <span className="truncate">{name}</span>
                  <IconChevronRight size={18} className="ml-auto" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-indigo-950">
        <Testimonials />
      </section>

      <section className="mx-auto max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Follow my Instagram for free social media growth advice!
          </h2>

          <ExternalLink href="/">
            Visit my Instagram
            <IconArrowUpRight size={18} />
          </ExternalLink>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array(4)
            .fill(null)
            .map((_, key) => (
              <ExternalLink
                key={key}
                href="/"
                className="group hover:text-current md:hover:text-indigo-900"
              >
                <Card className="p-0 md:hover:border-indigo-900 md:hover:shadow-boxy-hover md:group-focus-visible:border-indigo-900 md:group-focus-visible:shadow-boxy-hover">
                  <CardContent>
                    <Image
                      src=""
                      alt=""
                      width={1080}
                      height={1350}
                      className="h-full bg-violet-50"
                    />
                  </CardContent>
                </Card>
              </ExternalLink>
            ))}
        </div>
      </section>
    </PageWrapper>
  );
}
