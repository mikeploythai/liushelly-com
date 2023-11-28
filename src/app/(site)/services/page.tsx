import type { Metadata } from "next";
import type { ListItem } from "sanity-studio/types";

import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { sanityImage } from "sanity-studio/lib/image";
import { orderableQuery } from "sanity-studio/queries";
import Announcement from "~/components/announcement";
import CardGrid from "~/components/card-grid";
import ContentBlock from "~/components/content-block";
import MarkdownWrapper from "~/components/markdown-wrapper";
import PageWrapper from "~/components/page-wrapper";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";

export const metadata: Metadata = {
  title: "SERVICES",
  description:
    "Shelly Liu provides digital marketing services focused on organic growth. Get in touch to learn how Shelly can help your business flourish online.",
  openGraph: {
    title: "SERVICES | Shelly Liu",
    description:
      "Shelly Liu provides digital marketing services focused on organic growth. Get in touch to learn how Shelly can help your business flourish online.",
    url: "https://liushelly.com/services",
    type: "website",
  },
};

export default async function ServicesPage() {
  const services = await sanityFetch<ListItem[]>({
    query: orderableQuery,
    params: { type: "services" },
    tags: ["services"],
  });

  if (!services) return;
  const servicesList = services.slice(1, services.length);

  return (
    <PageWrapper>
      <section className="mx-auto flex max-w-screen-md flex-col items-center gap-6 p-6">
        <h1 className="font-heading text-3xl font-medium md:py-6 md:text-center md:text-4xl">
          Take your brand&apos;s social media presence to the next level.
        </h1>

        <Card className="w-full">
          <CardHeader className="relative min-h-[208px] sm:aspect-[16/6] sm:min-h-0">
            {services[0]?.image && (
              <Image
                src={sanityImage(services[0].image).url()}
                alt={services[0].name ?? ""}
                placeholder="blur"
                blurDataURL={services[0].image.lqip}
                className="border border-indigo-950 bg-white object-cover"
                fill
              />
            )}
          </CardHeader>

          <CardContent className="border border-dashed border-indigo-950 p-3">
            <MarkdownWrapper className="prose-headings:capitalize">
              {services[0]?.content && (
                <ContentBlock content={services[0].content} />
              )}
            </MarkdownWrapper>
          </CardContent>

          <CardFooter>
            <Link
              href={`/${services[0]?._type}/${services[0]?.slug.current}`}
              className={buttonVariants({ class: "w-full" })}
            >
              View details
              <IconChevronRight size={18} className="ml-auto" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Announcement />

      <section className="mx-auto max-w-screen-lg space-y-6 p-6">
        <hgroup className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Not ready for social media management?
          </h2>

          <p className="text-sm md:text-base">
            My one-time services are the perfect solution! Whether you need an
            expert opinion or just a little guidance, I&apos;m here to help you
            make the best decisions for your business without the long-term
            commitment.
          </p>
        </hgroup>

        <CardGrid list={servicesList} />
      </section>
    </PageWrapper>
  );
}