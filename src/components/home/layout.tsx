import type { HomeData } from "~/lib/types";

import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { sanityImage } from "sanity-studio/lib/image";
import { cn } from "~/lib/cn";
import AnnouncementBanner from "../announcement-banner";
import BlockContent from "../block-content";
import CardGrid from "../card-grid";
import ExternalLink from "../external-link";
import PageWrapper from "../page-wrapper";
import PhotoGrid from "../photo-grid";
import MarkdownProvider from "../providers/markdown";
import { buttonVariants } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Testimonials from "./testimonials";

export default function HomeLayout({ data }: { data: HomeData }) {
  const { home, announcement, services, testimonials, instagram } = data;

  return (
    <PageWrapper>
      <section className="mx-auto w-full max-w-screen-lg sm:p-6">
        <Card className="m-0 rounded-none border-0 p-0 shadow-none sm:mb-2 sm:mr-2 sm:rounded sm:border sm:shadow-boxy">
          <CardContent className="grid sm:grid-cols-3">
            <div className="space-y-6 p-6 sm:col-span-2 sm:space-y-9 sm:p-9 md:space-y-12 md:p-12">
              <hgroup className="space-y-2 sm:space-y-4">
                <h1 className="font-heading text-3xl font-medium md:text-4xl">
                  {home.hero?.heading ?? "Add a heading"}
                </h1>

                <MarkdownProvider>
                  <BlockContent content={home.hero?.subheading} />
                </MarkdownProvider>
              </hgroup>

              <ExternalLink
                href={home.hero?.cta?.href}
                className={buttonVariants({
                  size: "lg",
                  className: "no-underline",
                })}
              >
                {!home.hero?.cta?.text
                  ? !home.hero?.cta?.href
                    ? "Add a link and label"
                    : "Add a label"
                  : home.hero.cta.text}
                <IconArrowUpRight size={20} />
              </ExternalLink>
            </div>

            <figure className="relative min-h-64 overflow-hidden border-t border-indigo-950 bg-white sm:border-l sm:border-t-0">
              <Image
                src={
                  home.hero?.image
                    ? sanityImage(home.hero.image).url()
                    : "https://placekitten.com/288/432"
                }
                alt={home.hero?.image?.alt ?? "Placekitten"}
                placeholder={home.hero?.image?.asset ? "blur" : "empty"}
                blurDataURL={home.hero?.image?.lqip}
                className="object-cover object-[50%_30%] transition duration-300 ease-in-out md:hover:scale-105"
                priority
                fill
              />
            </figure>
          </CardContent>
        </Card>
      </section>

      <AnnouncementBanner announcement={announcement} />

      <section className="mx-auto w-full max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Personalized services that&apos;ll skyrocket your socials.
          </h2>

          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "link" }), "p-0")}
          >
            Explore services
            <IconArrowRight size={18} />
          </Link>
        </div>

        <CardGrid list={services} className="md:grid-cols-3" />
      </section>

      <section className="bg-indigo-950">
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="mx-auto w-full max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Follow my Instagram for free social media growth advice!
          </h2>

          <ExternalLink href={instagram?.href ?? "/studio/structure/links"}>
            {instagram?.href
              ? "Visit my Instagram"
              : `Add a link called "Instagram" in the studio!`}
            <IconArrowUpRight size={18} />
          </ExternalLink>
        </div>

        <PhotoGrid images={home.instagramPosts} width={1080} height={1350} />
      </section>
    </PageWrapper>
  );
}
