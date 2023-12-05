import type { Announcement, ListItem } from "~/lib/types";

import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { sanityImage } from "sanity-studio/lib/image";
import AnnouncementBanner from "../announcement-banner";
import BlockContent from "../block-content";
import CardGrid from "../card-grid";
import PageWrapper from "../page-wrapper";
import MarkdownProvider from "../providers/markdown";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function ServicesLayout({
  services,
  announcement,
}: {
  services: ListItem[];
  announcement: Announcement;
}) {
  if (!services || !announcement) return;
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
            <MarkdownProvider className="prose-headings:capitalize">
              {services[0]?.content && (
                <BlockContent content={services[0].content} />
              )}
            </MarkdownProvider>
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

      <AnnouncementBanner announcement={announcement} />

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
